import React from 'react'
import {Stack ,Image} from "@chakra-ui/react"
import Clock from './Clock'
import Logo from "../assets/logodeposito.svg"
export default function Navbar() {
    return (
        <React.Fragment>
            <Stack bg="green.500" minH="40px" direction="row" justify="space-around" >
                    <Image src={Logo}/>
                <Clock  />
            </Stack>
        </React.Fragment>
    )
}
