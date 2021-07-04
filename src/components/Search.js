import React, {  useState } from "react";
import { Container, Input, InputGroup,  Button} from "@chakra-ui/react";

export default function Search() {

    const [input, setInput] = useState("")
    const [dato ,setDato]=useState("")
  
   const handleChange=(e)=>{    
    setInput(e.target.value)  
   } 

   const enviar=(e)=>{    
      e.preventDefault()
      setDato([...dato,{name:input}])   
      setInput("")
   }
 
  return (
    <React.Fragment>
      <Container mb={3}>

        <form onSubmit={enviar}>       
        <InputGroup boxShadow="dark-lg">
          <Input type="text" placeholder="Nombre" bg="white" onChange={handleChange} name="name" value={input}/>
          <Button type="submit">Agrega</Button>
        </InputGroup> 
        </form>
        
      </Container>
    </React.Fragment>
  );
}
