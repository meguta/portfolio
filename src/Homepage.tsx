import * as React from "react"
import {Box, Text, Flex, Link, Image, Heading, Divider} from "@chakra-ui/react"

export const Homepage = () => {

    return (
    <Flex width="99vw" direction="column" justifyContent="center">
            <Flex margin="10" height="85vh" backgroundImage="url('/topography.svg')"  backgroundPosition="center" backgroundRepeat="repeat-x" backgroundSize="1000px" direction="column" justifyContent="center" alignItems="center">
                <Box backgroundColor="gray.800" padding={10}>
                    <Text fontSize="9xl" fontWeight="bold">Hey, I'm Ahmed.</Text>
                    <Text fontSize="2xl">Before we get started, how about a joke?</Text>

                </Box>
            </Flex>
            <Flex direction="column" justifyContent="center" ml={10} mr={10}>
                <Heading mt={16} mb={16} fontWeight="normal" textAlign="start">About.</Heading>
                <Divider borderWidth="3px" borderColor="white"/>

                <Text mt={16} mb={16} textAlign="start">
                Hey there, once again I'm Ahmed, a frontend developer. 
                <br/><br/>Throughout my life, through the ups and downs, one thing has stayed constant for me, and that would be my love for all things technology. Whether that was me tinkering with old laptops to install different custom firware, or creating my own games in my free time. All these different experiences has aided in developing my problem-solving skills as a developer, as well as my love for the craft.
                <br/><br/>Today however, I'm  most interested in the web development side of things. Breathing life into applications made for the web is what I do best.
                </Text>
            </Flex>
            <Flex direction="column" justifyContent="center" ml={10} mr={10}>
                <Heading mt={16} mb={16} fontWeight="normal" textAlign="start">Projects.</Heading>
                <Divider borderWidth="3px" borderColor="white"/>
                <Text mt={16} mb={16} textAlign="start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis perspiciatis, adipisci cumque assumenda ipsa earum molestias architecto fugiat ut libero.
                Culpa officiis dolorum voluptas, adipisci maxime voluptatibus sint ab, eum aperiam ad suscipit. Labore iure quasi, ipsam quaerat placeat consequuntur.
                Delectus, nemo laudantium? Quasi ipsum, nulla modi repudiandae nisi, placeat nam praesentium eos similique provident iure consequatur saepe recusandae ad!
                Fugit sit vero deserunt autem animi, facilis rerum voluptas rem cupiditate exercitationem ipsum delectus aut quidem? Quos unde maiores reiciendis.
                Molestias sapiente expedita non quam odit ab. Amet hic voluptatem quae quibusdam impedit assumenda tempora, recusandae sed qui reprehenderit quidem.</Text>
            </Flex>
            <Box>
                <Heading>Blog.</Heading>
                <Text> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aspernatur excepturi veniam aperiam neque autem dolorum facere placeat alias sed.
                Illo optio, hic ea temporibus adipisci eaque error assumenda, unde maiores quibusdam quae. Est voluptas harum reprehenderit rerum atque optio?
                Harum, commodi. Natus ratione necessitatibus recusandae officia distinctio, sapiente velit voluptatem nesciunt incidunt ducimus ea id beatae odit dolor molestias!
                Reiciendis ea nam perferendis ratione iusto, magni, quasi, quibusdam nemo a autem saepe laudantium officia nostrum consectetur illo perspiciatis explicabo.
                A accusantium hic omnis vitae sunt corrupti quod quas, illo nulla soluta pariatur vero reiciendis deserunt illum necessitatibus vel asperiores!
                </Text>
            </Box>
            <Box>
                <Heading>Contact.</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta eveniet explicabo temporibus delectus obcaecati nesciunt ipsum molestias quaerat ducimus.
                Possimus officia ad optio commodi nisi sint culpa quas, sit laudantium velit nemo, libero quasi et tempora quisquam! Placeat, ex?
                Ex, distinctio officiis quas ut minima beatae ab nemo sint odio quae sequi repellat perferendis perspiciatis reprehenderit excepturi rerum accusantium.
                Quis asperiores illo eaque delectus accusamus voluptas, hic qui sed doloribus, minus quibusdam quasi fugiat ullam cupiditate et at possimus!
                Illo, blanditiis eveniet id rerum, eius quo aliquid iure accusantium nulla maiores alias repudiandae impedit nostrum animi, sequi culpa voluptates!</Text>
            </Box>
        </Flex>
    )
}