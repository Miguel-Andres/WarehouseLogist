import React,{useContext, useState ,useEffect} from 'react'
import {Text ,} from "@chakra-ui/react"
import Card from "../Card"
import {UserContext} from "../../context/UserContext" 
import {InsideContext} from "../../context/InsideContext"

export default function Entry() {
   const [user,setUser] = useContext(UserContext)   
   const [inside,setInside] = useContext(InsideContext)
   const [isDisabled,setIsDisabled] = useState(false)
   const [count,setCount]=useState(false)
   const [countDischarge, setCountDischarge] = useState(0)
   
 
   const handleChange=(value)=>{
      setCount(value)
   }
   const handleChangeDischarge =(value)=>{
         setCountDischarge(value)
   }
   
   
   const nextStep =(props)=>{

      setInside([
          ...inside ,
          {
            id:props.id,
            name :props.name ,     
            duration :  props.duration ,           
            colorName: props.colorName ,
            chargin : `${count ? count : props.chargin}` , 
            dischargin : `${countDischarge  ?   countDischarge : props.dischargin}` 

            }])

            // buscamos el indice del user en  [user]
            let removeId = user.map((moover)=>{return moover.id}).indexOf(props.id)
            //  remove user whit your index , return array whit user removed .. one is the number the  element want remove from that      
            user.splice(removeId,1)            
            
         }
         
         
   const closeCard=(props)=>{
       
           setUser(user.filter(item=> item.id !== props.id))
         }
         

    useEffect(() => {
      setIsDisabled(true) 
      setCount(0)  
      setCountDischarge(0)
      console.log(user)
        
      }, [user])   
    
  
    return (
       <React.Fragment>          
       {user.length? user.map(item=><Card  key={item.id} {...item} handleChangeDischarge={handleChangeDischarge} handleChange={handleChange} isDisabled={isDisabled} nextStep={()=>nextStep(item)} closeCard={()=>closeCard(item)}  /> ) : <Text >Cargar moover</Text>}
       </React.Fragment>
    )
}
