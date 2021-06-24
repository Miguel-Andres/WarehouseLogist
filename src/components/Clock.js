import React ,{useState ,useEffect}from 'react'
import {Stack} from "@chakra-ui/react"



export default function Clock() {


 const [hora, setHora] = useState(null)
 const [minuto,setMinuto] = useState("")
 const [segundo,setSegundo] = useState("")

const update =(event)=>{

    setHora(new Date().getHours())
    setMinuto(new Date().getMinutes())
    setSegundo(new Date().getSeconds() )
}



 useEffect(() => {
    setInterval(update,1000)
    update()
 }, [])
 

    return (
        <React.Fragment>
            <Stack bg="gainsboro" p="3" borderWidth="5px " borderColor="black" direction="row" justify="center" minW="200px">
              <Stack borderColor="black" borderWidth="1px ">
                  <h2>{hora}</h2>
              </Stack>
              <Stack borderColor="black" borderWidth="1px ">
                  <h2>{ minuto}</h2>
              </Stack>
              <Stack borderColor="black" borderWidth="1px ">
                  <h2>{segundo}</h2>
              </Stack >
                </Stack>
        </React.Fragment>
    )
}
