import React from 'react'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom"
import {UserProvider} from "./context/UserContext"

import Home from "./components/routes/Home"
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
export default function App() {
  return (
   <React.Fragment>

     <Router>
      <UserProvider>    

       <Navbar />
       <Switch>
         <Route path="/">
         <Home />
       </Route>
       </Switch>
       <Footer/>

       </UserProvider>

     </Router>

   </React.Fragment>
  )
}
