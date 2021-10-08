import React from 'react' 
import { SimpleGrid ,Text} from '@chakra-ui/react'


export default function Titlemain() {
    return (
       
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
        
    )
}
