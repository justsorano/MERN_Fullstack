import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRouter } from './routes'
import { useAuth } from './hooks/useAuth'
import { Authcontext } from './context/Authcontext'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'
import 'materialize-css'
function App() {
  const {token, userId, login, logout, ready} = useAuth()
  const isAuth = !!token
  const routes = useRouter(isAuth)
  if(!ready){
    return <Loader/>
  }
  return (
    <Authcontext.Provider value={{
      token, userId, login, logout, isAuth
    }}>
    <Router>
      <>
        {isAuth && <Navbar/>}
        <div className="container">
            {routes}
        </div>
      </>
    </Router>
    </Authcontext.Provider>
  )
}

export default App;
