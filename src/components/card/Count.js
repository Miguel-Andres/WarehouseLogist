import React from 'react'
import {NumberInput ,NumberInputField,NumberIncrementStepper,NumberDecrementStepper,NumberInputStepper} from "@chakra-ui/react"

export default function Count() {
    return (
        <div>
             <NumberInput size="xs" maxW={16} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            
        </div>
    )
}
