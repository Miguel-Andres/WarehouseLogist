import React from 'react'
import {Stack ,Image} from "@chakra-ui/react"
import Clock from './Clock'

export default function Navbar() {
    return (
        <React.Fragment>
            <Stack bg="gainsboro" minH="40px" direction="row" justify="space-around" p={2} align="center" >
                    <Image src="https://blush.design/api/download?shareUri=PlSR9kjBIaV4J9YB&w=800&h=800&fm=png" maxH="10vh"  />
                <Clock  />
            </Stack>
        </React.Fragment>
    )
}
