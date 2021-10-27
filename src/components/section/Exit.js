import React ,{useContext,useEffect,useState} from 'react'
import {Text} from "@chakra-ui/react"


import { ExitContext } from '../../context/ExitContext'

import Card from "../Card"

export default function Exit() {

    const [isHiden,setisHiden] = useState(false)
    const [exit] = useContext(ExitContext)

    const handleSubmit =()=>{
        console.log("enviar")
    }

   useEffect(() => {
    setisHiden(true)
   
    }, [exit])

    return (
        <React.Fragment>
            {exit.length? exit.map(item=><Card  {...item} key={item.id}  isHiden={isHiden}  handleSubmit={handleSubmit}  />) : <Text >Cargar moover</Text>}
        </React.Fragment>
        
    )
}
