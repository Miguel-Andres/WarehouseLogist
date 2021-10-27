import React,{useContext,useEffect,useState} from 'react'
import {Text} from "@chakra-ui/react"
import Card from "../Card"
import {InsideContext} from "../../context/InsideContext" 
import {ExitContext} from "../../context/ExitContext" 
import { UserContext } from '../../context/UserContext'


export default function Inside() {

  const [inside,setInside] = useContext(InsideContext)
  const [exit,setExit] = useContext(ExitContext)
  const [user,setUser] = useContext(UserContext)
  const [count,setCount] = useState(0)
  const [countDischarge,setCountDischarge] = useState(0)
  
 const handleChange =(value)=>{
   setCount(value)
  
 }

 const handleChangeDischarge=(value)=>{
  setCountDischarge(value)
 }

  const nextStep =(user)=>{

      setExit([...exit,{
        name: user.name ,
        id : user.id ,
        duration : user.duration ,
        colorName : user.colorName ,
        chargin : `${count === 0? user.chargin : count  }`  ,        
        dischargin : `${countDischarge === 0 ?user.dischargin : countDischarge}` 
        
      }])
       setInside( inside.filter(item=> item.id !== user.id) )
       
 
  }

  const backStep =(props)=>{
    
    setUser([...user,{
      name: props.name,
      id: props.id ,
      duration : props.duration ,
      colorName : props.colorName ,
      chargin : `${count === 0? props.chargin : count  }`  , 
      dischargin : `${countDischarge === 0 ?props.dischargin : countDischarge}` 

    }])
    
    setInside(inside.filter(item=> item.id !== props.id))
    
  }

  const closeButton=(props)=>{
    setInside(inside.filter(item=> item.id !== props.id))
  }

  useEffect(() => {
    console.log(inside)
  setCount(0)
  setCountDischarge(0)
  }, [inside])

  
    
    return (
        <>          
        {inside.length? inside.map(item=>  <Card  {...item} key={item.id} handleChangeDischarge={handleChangeDischarge} handleChange={handleChange} nextStep={()=>nextStep(item)} backStep={()=>{backStep(item)}} closeCard={()=>closeButton(item)} />) : <Text >Cargar Moover</Text>}
        </>
     )
    
}
