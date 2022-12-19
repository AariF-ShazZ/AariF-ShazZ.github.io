import { Box, Button, Flex, textDecoration } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";


const Navbar = () => {
  const [page, setPage] = useState(1);

  const handlePage = (id) => {
    if (id === 1) {
      setPage(id);
    } else if (id === 2) {
      setPage(id);
    } else if (id === 3) {
      setPage(id);
    } else if (id === 4) {
      setPage(id);
    } else if (id === 5) {
      setPage(id);
    }
  };
  return (
    <Flex
      position="fixed"
      h="62px"
      bg={"#ecf0f3"}
      justifyContent="space-between"
      w="100%"
      color=""
      fontWeight="bold"
      fontFamily="sans-serif"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      <Flex
        ml="10px"
        w={[ "100%","100%","100%","10%","10%"]}
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Text id="icon" fontSize="40px">
          Portfo
          <Text color={"#d11243"} as="span">
            lio
          </Text>
        </Text>
      </Flex>
      <Flex
        display={["none" , "none" , "none", "flex " , "flex"]}
        width="50%"
        justifyContent="space-around"
        alignItems="center"
        textTransform="uppercase"
        fontWeight="bold"
        fontFamily="serif"
      >
        <Text
          color={page === 1 ? "#d11243" : ""}
          textDecoration={page === 1 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(1)} to="home" smooth={true}>
            Home
          </Link>
        </Text>
        <Text
          color={page === 2 ? "#d11243" : ""}
          textDecoration={page === 2 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(2)} to="about" smooth={true}>
            About
          </Link>
        </Text>
        <Text
          color={page === 3 ? "#d11243" : ""}
          textDecoration={page === 3 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(3)} to="work" smooth={true}>
            Work
          </Link>
        </Text>
        <Text
          color={page === 4 ? "#d11243" : ""}
          textDecoration={page === 4 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(4)} to="skills" smooth={true}>
            Skills
          </Link>
        </Text>
        <Text
          color={page === 5 ? "#d11243" : ""}
          textDecoration={page === 5 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(5)} to="graph" smooth={true}>
            Github
          </Link>
        </Text>
        <Text
          color={page === 6 ? "#d11243" : ""}
          textDecoration={page === 6 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(6)} to="contact" smooth={true}>
            Contact
          </Link>
        </Text>
        <Text
          color={page === 6 ? "#d11243" : ""}
          textDecoration={page === 6 ? "underline" : ""}
          _hover={{
            bg: "#d11243",
            p: "10px",
            color: "#919497",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
           <a style={{textDecoration:"none"}} target="#" href="https://drive.google.com/file/d/10PDugc1xpqz3DhD8TTIGBWi19StgFI96/view">
          <Button
            _hover={{ colorScheme: "#d11243" , variant: "outline" }}
            h="35px"
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
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
