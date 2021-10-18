import React from "react";

import { Stack, Container, Text, Heading ,ScaleFade, } from "@chakra-ui/react";
import Count from "./card/Count";
import ButtonSend from "./card/ButtonSend";
import ButtonNext from "./card/ButtonNext";


export default function Card({name,isHiden,isDisabled,nextStep,backStep,colorName,handleChange,duration}) {
  

  
 

  return (
    <React.Fragment>
       <ScaleFade  initialScale={2}  in={true} > 
      <Container
        maxW="sm"
        minW="sm"
        m="5px"
        bg="white"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Stack>
          <Heading size="md" color={colorName} >{name}</Heading>
          <Stack direction="row" justify="space-around">
            <Stack>
              <Text size="sm">Charge</Text>
              <Count handleChange={handleChange}/>
            </Stack>

            <Stack>
              <Text>discharge</Text>
              <Count />
            </Stack>

            <Stack align="center">
              <Heading size="sm"> Duration </Heading>
              <Text size ="sm">
                { new Date().getMinutes()-duration[0] <0 ? new Date().getMinutes()-duration[0]  * -1:  new Date().getMinutes()- duration[0]  }:
                { new Date().getSeconds()-duration[1] <0 ? new Date().getSeconds()-duration[1]  * -1:  new Date().getSeconds()- duration[1]  } 
               </Text>
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
      </ScaleFade>
    </React.Fragment>
  );
}
