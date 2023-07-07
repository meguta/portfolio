import * as React from "react"
import {Box, Text, Flex, Link, Button, useColorMode} from "@chakra-ui/react"

export const Navbar = () => {
    const {toggleColorMode} = useColorMode()
    return (
        <Flex position="fixed" width="100vw" background="grayAlpha.500" backdropFilter='auto' backdropBlur='8px' justifyContent="space-evenly">
            <Text fontWeight="bold">
                Ahmed Imana
            </Text>
            <Link>Blog</Link>
            <Button onClick={toggleColorMode}>Dark Mode</Button>
        </Flex>
    )
}