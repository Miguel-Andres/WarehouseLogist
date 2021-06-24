import React from 'react'
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom"

import Home from "./components/routes/Home"
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
export default function App() {
  return (
   <React.Fragment>
     <Router>
       <Navbar />
       <Switch>
         <Route path="/">
         <Home />
       </Route>
       </Switch>
       <Footer/>
     </Router>
   </React.Fragment>
  )
}
