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

        setUser([...user,{name:input.replace(/^./, str => str.toUpperCase()) ,id: +new Date()  }])            
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
          <Input type="text" placeholder="Nombre" bg="white" onChange={handleChange} name="name" value={input}/>
          <Button type="submit">Agrega</Button>
        </InputGroup> 
      {warning ? <Badge colorScheme="red" ml={2}  >User empty</Badge>:null}
        </form> 
         
  
      </Container>
   
    </React.Fragment>
  );
}
