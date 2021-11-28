import { createContext } from 'react'
function noop(){}
export const Authcontext = createContext({
   token:null,
   userIn:null,
   login:noop,
   logout:noop,
   isAuth:false
})