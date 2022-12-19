import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";
const Card = ({ title, description, tech, links,img }) => {
  return (
    <Box w={["350px","350px","350px" ,"400px", "400px"]} m="auto" rounded={10} bg={"#f1f1f1"} h="530px" p="10px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
      <Stack>
        <Image rounded={10} h="220px" w="100%" src={img} />
        <Box color="black" textAlign="center">
          <Heading>{title}</Heading>
        </Box>
        <Text color="#919497">{description}</Text>
        <Text color={"#d11243"}>
          Tech Stack:{" "}
          <Text color="black" as="span">
            {tech.join(" ,")}
          </Text>
        </Text>
        <HStack  spacing={70}>
          <a style={{color:"black"}}>
            <Box
              rounded="50%"
              p="15px"
              _hover={{ bg: "#d11243", transition: "all 1s", color: "black" }}
            >
              <BsFillCameraVideoFill size="30px" />
            </Box>
          </a>
          <a style={{color:"black"}} href={links[0]} target="#">
            <Box
              rounded="50%"
              p="15px"
              _hover={{ bg: "#d11243", transition: "all 1s", color: "white" }}
            >
              <BsGithub size="30px" />
            </Box>
          </a>
          <a style={{color:"black"}} href={links[1]} target="#">
            <Box
              rounded="50%"
              p="15px"
              _hover={{ bg: "#d11243", transition: "all 1s", color: "white" }}
            >
              <BsFillEyeFill size="30px" />
            </Box>
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Card;
