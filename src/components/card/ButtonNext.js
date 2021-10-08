import React from 'react'
import {Button, } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai";


export default function ButtonNext({backStep, nextStep,isDisabled}) {
    return (
        <React.Fragment>
            <Button
              variant="outline"
              borderColor="red"
              isDisabled={isDisabled}  
              onClick ={backStep}          
            >
              Back
            </Button>
            <Button
        rightIcon={<AiOutlineArrowRight />}
        colorScheme="teal"
        variant="outline"
        onClick={nextStep}       
      >
        Next
      </Button>

        </React.Fragment>
    )
}
