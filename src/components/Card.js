import React from "react";
import { Stack, Container, Text, Button, Heading } from "@chakra-ui/react";
import {AiOutlineArrowRight } from "react-icons/ai"
import Count from "./card/Count";

export default function Card({name}) {
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
          <Heading size="md">{name}</Heading>
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

          <Stack direction="row" justify="space-between" spacing={4}>
            <Button  variant="outline" borderColor="red">
              Back
            </Button>
            <Button
              rightIcon={<AiOutlineArrowRight />}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Stack>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
