import React from 'react'
import { Link } from 'react-router-dom'

export const LinkListItem = ({link, index}) =>{
   return (
   <tr>
      <td>{index + 1}</td>
      <td>{link.from}</td>
      <td>{link.to}</td>
      <td>
         <Link to={`/detail/${link._id}`}>Открыть</Link>
      </td>
   </tr>
   )
}