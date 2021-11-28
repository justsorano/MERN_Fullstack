import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
export const useRouter = isAuthentificated =>{
   if(isAuthentificated){
      return (
         <Routes>
            <Route path='/link' exact element={<LinksPage/>}/>
            <Route path='/create' exact element={<CreatePage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
            <Route path="*" element={<Navigate to ='/link' />}/>
         </Routes>
      )
   }
   return (
      <Routes>
         <Route path='/' exact element={<AuthPage/>}/>
         <Route path="*" element={<Navigate to ='/' />}/> 
      </Routes>
   )
}