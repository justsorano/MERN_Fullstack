import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { Authcontext } from '../context/Authcontext'
import { Loader } from '../components/Loader'
import { LinkCard } from '../components/LinkCard'

export const DetailPage = () => {
   const { token } = useContext(Authcontext)
   const [link, setLink] = useState(null)
   const linkid = useParams().id
   const {request, loading} = useHttp()

   const getLink = useCallback(async () =>{
      try{
         const fetched =  await request(`/api/link/${linkid}`, 'GET', null, {
            Authorization: `Bearer ${token}`
         })
         setLink(fetched)
      }catch(e){}
   },[token, linkid, request])
   useEffect(() =>{
      getLink()
   },[getLink])
   if(loading){
      return <Loader/>
   }
   return (
      <>
      {!loading && link && <LinkCard link={link}/>}
      </>
   )
}