import { extendTheme } from "@chakra-ui/react";
import '@fontsource/manrope/200.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'

const theme = extendTheme({
    fonts: {
        heading: `'Manrope', sans-serif`,
        body: `'Manrope', sans-serif`
    }
})

export default theme