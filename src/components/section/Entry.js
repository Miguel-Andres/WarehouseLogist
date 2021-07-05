import React,{useContext} from 'react'

import Card from "../Card"
import {UserContext} from "../../context/UserContext" 



export default function Entry() {
    const [user] = useContext(UserContext)


    return (
       <React.Fragment>          
       {user.length? user.map(item=>  <Card  name={item.name} key={item.name}/>) : <h2>Cargar Moover</h2>}
       </React.Fragment>
    )
}
