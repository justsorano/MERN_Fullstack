import React,{ useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Authcontext } from '../context/Authcontext'
import { useHttp } from '../hooks/http.hook'


export const CreatePage = () => {
   const navigator = useNavigate()
   const { request } = useHttp()
   const [link, setLink] = useState('')
   const auth = useContext(Authcontext)

   const pressHandler = async e =>{
      if(e.key === 'Enter'){
         if(link){
            try{
               const data = await request('/api/link/generate', 'POST', {from: link},{
                  Authorization: `Bearer ${auth.token}`
               })
               navigator(`/detail/${data.link._id}`)
            }catch(e){}
         }
      }
   }
   
   return (
      <div className='row mv2'>
         <div className="col s8 offset-s2">
            <div className="input-field">
               <input
               value={link}
               type="text" 
               id='link' 
               name='link'
               onChange={e => setLink(e.target.value.trim())}
               onKeyPress={pressHandler}
               required
               />
               <label htmlFor="link">Вставьте ссылку</label>
            </div>
         </div>
      </div>
   )
}