import React,{useContext, useState ,useEffect} from 'react'
import {Text ,} from "@chakra-ui/react"
import Card from "../Card"
import {UserContext} from "../../context/UserContext" 
import {InsideContext} from "../../context/InsideContext"

export default function Entry() {
    const [user] = useContext(UserContext)   
    const [inside,setInside] = useContext(InsideContext)
    const [isDisabled,setIsDisabled] = useState(false)
 
    const nextStep =(props)=>{

       setInside([...inside ,{name :props.name , id:props.id, colorName:props.colorName}])
       // buscamos el indice del user en  [user]
      let removeId = user.map((moover)=>{return moover.id}).indexOf(props.id)
      //  remove user whit your index , return array whit user removed .. one is the number the  element want remove from that      
         user.splice(removeId,1)
       
    }

    useEffect(() => {
      setIsDisabled(true)
      
      
    }, [user])
     
   
   
    
  
    return (
       <React.Fragment>          
       {user.length? user.map(item=><Card  key={item.id} {...item}  isDisabled={isDisabled} nextStep={()=>nextStep(item)}   /> ) : <Text >Cargar moover</Text>}
       </React.Fragment>
    )
}
