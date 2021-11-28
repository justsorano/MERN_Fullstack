import React from 'react'
import { LinkListItem } from './LinkListItem'

export const LinksList = ({ links }) =>{
   if(links.length === 0){
      return <p className='center'>Пока ничего нет</p>
   }
   return (
      <table>
         <thead>
            <tr>
               <th>#</th>
               <th>Оригинал</th>
               <th>Ваша ссылка</th>
               <th>Открыть</th>
            </tr>
         </thead>

         <tbody>
            {links.map((link, idx) => <LinkListItem link={link} key={link._id} index={idx} />)}  
         </tbody>
      </table>
   )
}