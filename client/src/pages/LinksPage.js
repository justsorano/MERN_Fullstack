import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook' 
import { Authcontext } from '../context/Authcontext'
import { LinksList } from '../components/LinksList'
import { Loader } from '../components/Loader'
export const LinksPage = () => {
   const [links, setLinks] = useState([])
   const { request, loading } = useHttp()
   const { token } = useContext(Authcontext)

   const fetchLinks = useCallback(async () =>{
      try{
         const fetched = await request('/api/link', 'GET', null, {
            Authorization: `Bearer ${ token }`
         })
         setLinks(fetched)
      }catch(e){}
   },[token, request])

   useEffect(() =>{
      fetchLinks()
   },[fetchLinks])
   
   if(loading){
      return <Loader/>
   }
   return (
      <>
      {!loading && <LinksList links={links} />}
      </>
   )
}