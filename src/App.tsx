
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Heading,
  Text
} from "@chakra-ui/react"
import {Navbar} from './Navbar'
import {Homepage} from './Homepage'
import theme from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Homepage/>
      <Text>Copyright 2023, Ahmed Imana</Text>
    </Box>
  </ChakraProvider>
)
