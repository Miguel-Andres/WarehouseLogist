import React, {  useState ,useContext} from "react";
import { Container, Input, InputGroup,  Button,Badge} from "@chakra-ui/react";
import {UserContext} from "../context/UserContext"

export default function Search() {

    const [input, setInput] = useState("")
    const [user ,setUser]=useContext(UserContext)
    const [warning, setWarning] = useState(false)
  
   const handleChange=(e)=>{    
    setInput(e.target.value)  
   } 

   const enviar=(e)=>{    
      e.preventDefault()

      

     if(input){    

        setUser([
          ...user,
          {
            id: +new Date() ,
            name:input.replace(/^./, str => str.toUpperCase()) ,
            duration :  [new Date().getMinutes() , new Date().getSeconds() ]  ,
            colorName: "#" + ((1<<24)*Math.random() | 0).toString(16), 

           }])  
           console.log(user)          
        setInput("")  
        setWarning(false)
     }else{
      setWarning(true)
      }
     
   }

 
  return (
    <React.Fragment>
      <Container mb={3}>
        <form onSubmit={enviar}>       
        <InputGroup boxShadow="dark-lg">
          <Input type="text" placeholder="Nombre" bg="white" onChange={handleChange} name="name" value={input} autoFocus/>
          <Button type="submit">Agrega</Button>
        </InputGroup> 
      {warning ? <Badge colorScheme="red" ml={2}  >User empty</Badge>:null}
        </form> 
         
  
      </Container>
   
    </React.Fragment>
  );
}
