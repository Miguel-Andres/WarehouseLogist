import React ,{useState ,useEffect}from 'react'
import {Stack  ,Text } from "@chakra-ui/react"





export default function Clock() {


 const [hora, setHora] = useState(null)
 const [minuto,setMinuto] = useState("")
 const [segundo,setSegundo] = useState("")

const update =(event)=>{

    setHora(new Date().getHours())
    setMinuto(new Date().getMinutes())
    setSegundo(new Date().getSeconds() )
}

setInterval(update,1000)



    return (
        <React.Fragment>
            <Stack bg="gainsboro" p="3" borderWidth="2px" borderRadius="5px" borderColor="black" direction="row" justify="center" minW="150px" maxH="60px"  boxShadow="lg">

              <Stack   fontFamily="Staatliches" >
                  <Text letterSpacing={3} padding="2px">{hora}</Text>
              </Stack>
             
              <Stack  fontFamily="Staatliches">
                  <Text letterSpacing={3} padding="2px">{minuto}</Text>
              </Stack>
              <Stack   fontFamily="Staatliches">
                  <Text letterSpacing={3} padding="2px">{segundo}</Text>
              </Stack >

              
                </Stack>

        </React.Fragment>
    )
}
