import React from "react";
import {UserProvider} from "../context/UserContext"
import {InsideProvider,} from "../context/InsideContext" 
import {ExitProvider} from "../context/ExitContext" 

import { Stack, Grid, VStack } from "@chakra-ui/react";

import Search from "./Search";
import Entry from "./section/Entry";
import Inside from "./section/Inside";
import Exit from "./section/Exit";
import Footer from "./Footer";
import Titlemain from "./Titlemain";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Stack bg="gainsboro" minH="100vh">
         <UserProvider> 
        <Search />

        <Titlemain />
        <InsideProvider>
         <ExitProvider>
        <Grid templateColumns="repeat(3,1fr)" gap={4} h="100vh">
          <VStack bg="blue.500" >
            <Entry />
          </VStack>
          <VStack bg="green.500">
            <Inside />
          </VStack>

          <VStack bg="yellow.500">
            <Exit />
          </VStack>
        </Grid>
       </ExitProvider>
        </InsideProvider>
      </UserProvider>
      </Stack>

      <Stack>
      <Footer  />
         </Stack>
    </React.Fragment>
  );
}
