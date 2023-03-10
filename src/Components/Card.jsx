import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, tech, links,img }) => {
  return (
    <Box w={["350px","350px","350px" ,"400px", "400px"]} m="auto" rounded={10} bg={"#f1f1f1"} h="550px" p="10px 15px 50px 15px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
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
        <HStack  spacing={50}>           
          <a style={{color:"#d11243"}} href={links[0]} target="#">
            <Box
              rounded="10%"
              p="15px"
              _hover={{ bg: "#d11243", transition: "all 1s", }}
            >
              <Button  size="30px">View Code</Button>
            </Box>
          </a>
          <a style={{color:"#d11243"}} href={links[1]} target="#">
            <Box
              rounded="10%"
              p="15px"
              _hover={{ bg: "#d11243", transition: "all 1s" }}
            >
                <Button  size="30px" color={"#"}>See This Live</Button>
            </Box>
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Card;
