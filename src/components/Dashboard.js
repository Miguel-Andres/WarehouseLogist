import React from "react";
import { Stack, Grid, Text, SimpleGrid, VStack } from "@chakra-ui/react";

import Search from "./Search";
import Entry from "./section/Entry";
import Inside from "./section/Inside";
import Exit from "./section/Exit";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Stack bg="gainsboro" minH="100vh">
          
        <Search />

        <SimpleGrid columns={3}>
          <Text textAlign="center" fontFamily="Staatliches" fontSize="xl">
            entry
          </Text>
          <Text textAlign="center" fontFamily="Staatliches" fontSize="xl">
            Inside
          </Text>
          <Text textAlign="center" fontFamily="Staatliches" fontSize="xl">
            Exit
          </Text>
        </SimpleGrid>

        <Grid templateColumns="repeat(3,1fr)" gap={4} h="100vh">
          <VStack bg="blue.500">
            <Entry />
          </VStack>

          <VStack bg="green.500">
            <Inside />
          </VStack>

          <VStack bg="yellow.500">
            <Exit />
          </VStack>
        </Grid>

      </Stack>
    </React.Fragment>
  );
}
