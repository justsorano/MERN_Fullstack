import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { Authcontext } from '../context/Authcontext'

export const AuthPage = () => {
   const message = useMessage()
   const {loading, error, request, clearError} = useHttp()
   const [input,setInput] = useState({email:'', password:''})
   const inputHandler = e => setInput({...input,[e.target.name]:(e.target.value).trim()})
   const auth = useContext(Authcontext)
   useEffect(() =>{
      message(error)
      clearError()
   },[error, message, clearError])

   const registerHandler = async () => {
      try{
         if(input.password.length < 6){
            message('Пароль должен содержать как минимум 6 символов')
            return
         }
         const data = await request('/api/auth/register', 'POST' ,{...input})
         setInput({email:'', password:''})
      }catch(e){}
   }

   const loginHandler = async () => {
      try{
         const data = await request('/api/auth/login', 'POST' ,{...input})
         setInput({email:'', password:''})
         auth.login(data.token, data.userId)
      }catch(e){}
   }
   return (
      <div className='row'>
         <div className="col s6 offset-s3 ">
            <h1>Авторизация</h1>
            <div className="card indigo lighten-1">
               <div className="card-content white-text">
                  <span className='card-title'>Авторизация</span>
                  <div className='input-group '>
                     <div className="row">
                        <div className="input-field">
                           <input
                           value={input.email} 
                           type="text" 
                           className="amber-color" 
                           id='email' 
                           name='email'
                           onChange={inputHandler}
                           required
                           />
                           <label htmlFor="email">Email:</label>
                        </div>
                     </div>
                     <div className="row">
                        <div className="input-field">
                           <input 
                           value={input.password}
                           type="password" 
                           className="amber-color" 
                           id='password' 
                           name='password'
                           onChange={inputHandler}
                           required
                           />
                           <label htmlFor="password">Password:</label>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card-action">
                  <button className='btn mh1 amber darken-2' 
                  type='button'
                  disabled={loading}
                  onClick={loginHandler}
                  >Войти</button>

                  <button className='btn amber darken-2' 
                  type='button'
                  disabled={loading} 
                  onClick={registerHandler}
                  >Регистрация</button>
               </div>
            </div>
         </div>
      </div>
   )
}