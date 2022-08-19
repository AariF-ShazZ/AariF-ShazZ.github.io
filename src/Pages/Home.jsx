import { Box, Flex, Heading, Stack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import { dark, orange, darkSecond } from "./Navbar";
import Typewriter from "typewriter-effect";
import './responsive.css';

const Home = () => {
  return (
    <Flex h="800px" bg={dark} justifyContent="space-around">
      <Flex w="40%" justifyContent="center" alignItems="center">
        <Box w="100%" h="400px">
          <Box mt="70px">
            {" "}
            <Text  color="white" fontSize="35px" fontWeight="bold" fontFamily="sans-sarif">
              Hello , my name is
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text color="white"  fontSize="100px" fontWeight="bold" fontFamily="monospace">
              Akhil Khan
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text
              fontSize="35px"
              fontWeight="bold"
              fontFamily="sans-sarif"
              color={orange}
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
        <a style={{textDecoration:"none"}} target="#" href="https://drive.google.com/file/d/1pWtbmMwNKwva6Yi773Hdxww43xVJnijP/view?usp=sharing">
          <Button
            _hover={{ colorScheme: { orange }, variant: "outline" }}
            h="45px"
            w="140px"
            fontSize="20px"
            bg={orange}
            rounded={5}
            fontWeight="bold"
            border="none"
            color="white"
            variant="solid"
          >
            Resume
          </Button>
          </a>
        </Box>
      </Flex>
      <Flex w="30%" justifyContent="center" alignItems="center">
        <Box w="70%" h="295px" rounded="50%" bg="orange" overflow="hidden">
          <Image ml="20px"  src="https://i.ibb.co/wQn81r0/akhilbg.png" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
