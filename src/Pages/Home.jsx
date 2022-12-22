import { Box, Flex, Heading, Stack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import './responsive.css';

const Home = () => {
  return (
    <Flex h="800px" bg={"#f1f1f1"} justifyContent="space-around">
      <Flex  w={["100%" , "100%" , "100%" , "40%","40%"]} justifyContent="center" alignItems="center">
        <Stack  textAlign={["center","center","center","",""] }spacing={1} w="100%" h="400px">
          <Box mt="70px">
            {" "}
            <Text  color="black" fontSize={["15px","20px","25px","35px","35px"]} fontWeight="bold" fontFamily="sans-sarif">
              Hello , my name is
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text color="black"  fontSize={["50px","60px","70px","100px","100px"]} fontWeight="bold" fontFamily="monospace">
             Aarif
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text
              fontSize={["30px","30px","30px","35px","35px"]}
              fontWeight="bold"
              fontFamily="sans-sarif"
              color={"#d11243"}
            >
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm a Full Stack Developer.")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </Text>
          </Box>
        <a style={{textDecoration:"none"}} target="#" href="https://drive.google.com/file/d/10PDugc1xpqz3DhD8TTIGBWi19StgFI96/view">
          <Button
            _hover={{ colorScheme: "#d11243" , variant: "outline" }}
            h="45px"
            w="140px"
            fontSize="20px"
            bg={"#d11243"}
            rounded={5}
            fontWeight="bold"
            border="none"
            color="#f1f1f1"
            variant="solid"
          >
            Resume
          </Button>
          </a>
        </Stack>
      </Flex>
      <Flex display={["none" ,"none" ,"none" ,"flex" ,"flex"]} w="30%" justifyContent="center" alignItems="center">
        <Box w="70%" h="295px" rounded="50%" bg="#f1f1f1" overflow="hidden" boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}>
          <Image  src="https://avatars.githubusercontent.com/u/85449424?v=4" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
