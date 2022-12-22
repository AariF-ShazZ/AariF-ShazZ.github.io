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
import { dark, darkSecond, orange } from "./Navbar";
import "./responsive.css";
import  Github from  "../Components/Image/githubImage.png"

const Graph = () => {
  return (
    <Box py="40px" m="auto" bg={"#ecf0f3"} h="auto">
      <Flex pt="40px" bg={"#ecf0f3"} justifyContent="center">          
          <Heading fontSize="30px" color={"#d11243"} as="span">
          Github Graph & Github Statistics
          </Heading>

      </Flex>
      <Flex p={["0px","0px","5px","10px","20px"]} w="50%" m="auto" gap={5}  flexDirection="column" justifyContent="center" alignItem="center" >
        <Stack direction={["column","column","row","row"]}>
          <Image w={["150px","180px","280px","350px"]} src="https://camo.githubusercontent.com/c2d3ca1a91f765f99c3f95eb1a86fc6cae66889a514216be8af24a54ef794199/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d61617269662d7368617a7a2673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
          <Image w={["150px","180px","280px","350px"]} src="https://camo.githubusercontent.com/8fb52d8672a8de37430abf1e1c8c1fc0d48267ca7c401594dd3b8900c73f0f0e/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d61617269662d7368617a7a26" />
        </Stack>
        <Box>
          <Image src={Github} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Graph;
