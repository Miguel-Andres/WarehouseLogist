import React from "react";
import { Container, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export default function Search() {

   

  return (
    <React.Fragment>
      <Container mb={3}>
        <InputGroup boxShadow="dark-lg">
          <Input type="text" placeholder="Nombre" bg="white" />
          <InputRightAddon children="Agregar" />
        </InputGroup>
      </Container>
    </React.Fragment>
  );
}
