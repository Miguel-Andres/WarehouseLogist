import React from 'react'
import {Stack ,Grid, GridItem} from "@chakra-ui/react"

import Card from './Card'

export default function Dashboard() {
    return (
        <React.Fragment>
            <Stack bg="gainsboro" minH="100vh" >

                    <Stack bg="purple.500">
                    <Card />

                    </Stack>

                <Grid templateColumns="repeat(3,1fr)"gap={4} h="100vh">

                <GridItem bg="blue.500">
                <Card />
                </GridItem>

                <GridItem bg="green.500">
                <Card />                    
                <Card />                    
                <Card />                    
                </GridItem>

                <GridItem bg="yellow.500">
                <Card />                    
                </GridItem>
                </Grid>

            </Stack>
        </React.Fragment>
    )
}
