import React from "react";
import {UserProvider} from "../context/UserContext"
import {InsideProvider,} from "../context/InsideContext" 
import {ExitProvider} from "../context/ExitContext" 

import { Grid, VStack ,GridItem } from "@chakra-ui/react";

import Search from "./Search";
import Entry from "./section/Entry";
import Inside from "./section/Inside";
import Exit from "./section/Exit";
import Footer from "./Footer";
import Titlemain from "./Titlemain";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Grid templateColumns="repeat(3,1fr)"   bg="green.200">
         <UserProvider > 
           <GridItem colSpan={3}bg="blue.200" h="20" > 
             <Search />
             <Titlemain />
           </GridItem>
    
        <InsideProvider>          
         <ExitProvider>
           <GridItem colSpan={3} >

          <Grid  bg="yellow" gap={2}>

          <VStack bg="blue.500" minH="100vh" >
            <Entry />
          </VStack>
          <VStack bg="green.500" >
            <Inside />
          </VStack>

          <VStack bg="yellow.500">
            <Exit />
          </VStack>

          <GridItem colSpan={3} >
           <Footer />
          </GridItem>
          </Grid>

          </GridItem>
      </ExitProvider>
      </InsideProvider>
      </UserProvider>
      </Grid>

  
        
    </React.Fragment>
  );
}
