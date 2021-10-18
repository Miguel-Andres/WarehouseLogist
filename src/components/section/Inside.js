import React,{useContext} from 'react'
import {Text} from "@chakra-ui/react"
import Card from "../Card"
import {InsideContext} from "../../context/InsideContext" 
import {ExitContext} from "../../context/ExitContext" 
import { UserContext } from '../../context/UserContext'


export default function Inside() {

  const [inside,setInside] = useContext(InsideContext)
  const [exit,setExit] = useContext(ExitContext)
  const [user,setUser] = useContext(UserContext)

  const nextStep =(user)=>{

      setExit([...exit,{
        name: user.name ,
        id : user.id ,
        duration : user.duration ,
        colorName : user.colorName ,
      }])
       setInside( inside.filter(item=> item.id !== user.id) )

  }

  const backStep =(props)=>{

    setUser([...user,{
      name: props.name,
      id: props.id ,
      duration : props.duration ,
      colorName : props.colorName ,
    }])
    
    setInside(inside.filter(item=> item.id !== props.id))
    
  }
    
    return (
        <>          
        {inside.length? inside.map(item=>  <Card  {...item} key={item.id}  nextStep={()=>nextStep(item)} backStep={()=>{backStep(item)}}/>) : <Text >Cargar Moover</Text>}
        </>
     )
    
}
