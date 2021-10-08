import React from 'react'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom"



import Home from "./components/routes/Home"
import Navbar  from './components/Navbar'

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
      

        
       

     </Router>

   </React.Fragment>
  )
}
