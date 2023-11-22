import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, tech, links, img }) => {
  return (
    <Box w={["350px", "350px", "350px", "400px", "400px"]} my={["5%"]} rounded={10} bg={"#ffffff"} h="550px" p="10px 15px 50px 15px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
      <Stack>
        <Image rounded={10} h="220px" w="100%" src={img} />
        <Box color="black" textAlign="center">
          <Heading>{title}</Heading>
        </Box>
        <Text color="#282938">{description}</Text>
        <Text >
          <span  style={{color:"#ff0000",fontWeight:"bold"}}>Tech Stack:{" "}</span>
          <Text color="black" as="span">
            {tech.join(" ,")}
          </Text>
        </Text>
        <HStack spacing={50} my={"3%"}>
          <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
            <p className="text-sm portfolio--link">
              <a href={links[0]}>View In Github</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p className="text-sm portfolio--link">
              <a href={links[1]}>View In Live</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </Flex>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Card;
