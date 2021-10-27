import React from 'react'
import {NumberInput ,NumberInputField,NumberIncrementStepper,NumberDecrementStepper,NumberInputStepper} from "@chakra-ui/react"

export default function Count({count ,handleChange }) {




    return (
        <div>
             <NumberInput size="xs" maxW={16} defaultValue={count?count : 0} min={0}  onChange={handleChange}   >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>            
        </div>
    )
}
