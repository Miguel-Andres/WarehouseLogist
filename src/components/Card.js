import React from "react";

import { Stack, Container, Text, Heading } from "@chakra-ui/react";
import Count from "./card/Count";
import ButtonSend from "./card/ButtonSend";
import ButtonNext from "./card/ButtonNext";

export default function Card({name , color ,isHiden,isDisabled,nextStep,backStep}) {
  return (
    <React.Fragment>
      <Container
        maxW="sm"
        m="5px"
        bg="white"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Stack>
          <Heading size="md" color={color} >{name}</Heading>
          <Stack direction="row" justify="space-around">
            <Stack>
              <Text size="sm">Charge</Text>
              <Count />
            </Stack>

            <Stack>
              <Text>discharge</Text>
              <Count />
            </Stack>

            <Stack align="center">
              <Heading size="sm"> Duration </Heading>
              <Text>30 </Text>
            </Stack>
          </Stack>

          <Stack direction="row" justify={isHiden?"center" :"space-between"} spacing={4}>

            {isHiden 
            ? <ButtonSend  />
            : <ButtonNext nextStep={nextStep} backStep={backStep} isDisabled={isDisabled} />            
            }

          </Stack>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
