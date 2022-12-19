import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  Text,
  Image,
  Input,
  Textarea,
  VStack,
  Toast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./responsive.css";
import axios from 'axios'

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number:"",
    message: "",
  });

  let name, value;
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, number, message } = user; 
    
    if(name && email  && number ,message){
      const payload = {
        name,
        email,
        phone:number,
        msg:message
      }

      axios.post("https://my-json-sever-api-masai.herokuapp.com/data" , payload)
      .then((r) => alert("Send"))
      .then(() => {
        setUser({
          name: "",
          email: "",
          number:"",
          message: "",
        })
      })
      .catch((e) => alert("Server Error please try again"))
    }else{
      alert("Kindly Please fill the all details")
    }
    
  }

  

  


  return (
    <Box>
      <Flex pt="40px" bg={"#f1f1f1"} justifyContent="center">   
          <Heading fontSize="30px" color={"#d11243"} as="span">
          Chat And Connect With Me
  
        </Heading>
      </Flex>
      <Flex h="600px" bg={"#f1f1f1"} justifyContent="space-around">
        <Flex display={["none" , "none" , "none" ,"flex" ,"flex"]} w="40%" justifyContent="center" alignItems="center">
          <Image
            w="600px"
            src="https://wallpaperaccess.com/full/2945080.jpg"
          />
        </Flex>
        <VStack w={["100%" , "100%" , "100%", "30%","30%"]} pt="150px" overflow="hidden">
          <Stack direction="row" spacing={25}>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://github.com/AariF-ShazZ"
            >
              <Button
                _hover={{ cursor: "pointer" }}
                color="black"
                fontSize="17px"
                rounded={5}
                border="none"
                leftIcon={<BsGithub />}
                bg="#feb2b2"
                variant="solid"
              >
                Github
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://www.linkedin.com/in/aarif-shazz-638647208/"
            >
              <Button
                _hover={{ cursor: "pointer" }}
                color="black"
                fontSize="17px"
                rounded={5}
                border="none"
                leftIcon={<BsLinkedin />}
                bg="#9bdaf3"
                variant="solid"
              >
                Linkedin
              </Button>
            </a>
            <Button
              _hover={{ cursor: "pointer" }}
              onClick={() => alert("aarif568khan@gmail.com")}
              rounded={5}
              border="none"
              rightIcon={<AiOutlineMail />}
              bg={"#f1f1f1"}
              color="white"
              fontSize="17px"
            >
              Call us
            </Button>
          </Stack>
          <Input
            id="fname"
            name="name"
            required
            value={user.name}
            onChange={getUserdata}
            pl="10px"
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your full name"
          />
          <Input
            id="email"
            name="email"
            required
            value={user.email}
            onChange={getUserdata}
            pl="10px"
            w="88%"
            h="42px"
            type="email"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your email"
          />
          <Input
           type="number"
            pl="10px"
            w="88%"
            required
            h="42px"
            name="number"
            value={user.number}
            onChange={getUserdata}
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your number"
          />
          <Textarea
            pl="10px"
            w="88%"
            h="100px"
            id="subject"
            required
            name="message"
            value={user.message}
            onChange={getUserdata}
            fontSize="13px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Message"
          />
          <Button
            onClick={sendData}
            _hover={{ cursor: "pointer" }}
            w="90%"
            border="none"
            rounded={10}
            color="white"
            bg={"#d11243"}
            h="45px"
          >
            Send Message
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
