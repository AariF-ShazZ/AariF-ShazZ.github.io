import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "./responsive.css";
import Github from "react-github-calendar"

const Graph = () => {
  return (
    <Box py="40px" m="auto" bg={"#ecf0f3"} h="auto">
      <Flex py="40px" bg={"#ecf0f3"} justifyContent="center">
        <Heading fontSize={["20px","30px","30px"]} color={"#d11243"} as="span">
          Github Graph & Github Statistics
        </Heading>

      </Flex>
      <Flex align={"center"} justify="center"   gap={5} flexDirection="column"  >
        <VStack align={"center"} justify="center">
         <Box >
         <Text align="center"><Image w={[320,500,700]} py={2} m="auto" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=aarif-shazz&theme=default" alt="aarif-shazz" /></Text>
         </Box>

          <Text align="center"><Image w={[320,500,700]} py={2} m="auto" src="https://github-readme-stats.vercel.app/api?username=aarif-shazz&theme=default&show_icons=true&locale=en" alt="aarif-shazz" /></Text>

          <Text align="center"><Image w={[320,500,700]} py={2} m="auto" src="https://github-readme-streak-stats.herokuapp.com/?user=aarif-shazz&theme=default&show_icons=true&locate=e" alt="aarif-shazz" /></Text>
        </VStack>
        <Box  px={5}>
          <Github username="AariF-ShazZ" color={"#d11243"} blockSize={15} blockMargin={5} fontSize={16}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Graph;
