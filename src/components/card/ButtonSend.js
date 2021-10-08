import React from 'react'

import { Button } from '@chakra-ui/react'

export default function ButtonSend({prop}) {



    return (
        <React.Fragment>
              <Button
             
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
              w={250}
              h={10}
             
            >
              Send
            </Button> 
        </React.Fragment>
    )
}
