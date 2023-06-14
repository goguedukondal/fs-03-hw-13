import React from 'react'
import { Heading,Box,Button} from '@chakra-ui/react'
function Contact({setIsProduct}) {
  return (
  <Box textAlign='center'><Heading color='red'>Product Component is Unmounted now !</Heading>
  <Button mt='20px' onClick={()=>(setIsProduct(true))}>Go to Product</Button>
  </Box>
  )
}

export default Contact