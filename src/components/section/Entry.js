import React,{useContext} from 'react'
import {Text} from "@chakra-ui/react"
import Card from "../Card"
import {UserContext} from "../../context/UserContext" 



export default function Entry() {
    const [user] = useContext(UserContext)


    return (
       <React.Fragment>          
       {user.length? user.map(item=>  <Card  name={item.name} key={item.name}/>) : <Text >Cargar Moover</Text>}
       </React.Fragment>
    )
}
