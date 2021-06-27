import React from 'react'
import {Stack ,Grid, GridItem , Text , SimpleGrid ,Box,VStack , StackDivider} from "@chakra-ui/react"

import Card from './Card'
import Search from "./Search"
import Entry from "./section/Entry"

export default function Dashboard() {
    return (
        <React.Fragment>
            <Stack bg="gainsboro" minH="100vh"  >

                   <Search/>                 
                <SimpleGrid columns={3}>
                    <Text  textAlign="center"  fontFamily="Staatliches" fontSize="xl">entry</Text>
                    <Text  textAlign="center" fontFamily="Staatliches" fontSize="xl">Inside</Text>
                    <Text  textAlign="center" fontFamily="Staatliches" fontSize="xl">Exit</Text>
                </SimpleGrid>

                <Grid templateColumns="repeat(3,1fr)"gap={4} h="100vh">

                  
                <GridItem bg="blue.500">
               <Entry />
                </GridItem>

                <VStack bg="green.500" divider={<StackDivider   />}   >
                <Card />                    
                <Card />                    
                <Card />                    
                </VStack>

                <GridItem bg="yellow.500"  >
                <Card />  
                  <Card />  
                   <Card />                   
                </GridItem>

                </Grid>

            </Stack>
        </React.Fragment>
    )
}
