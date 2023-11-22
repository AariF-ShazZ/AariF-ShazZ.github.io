import { Box, Flex, Heading } from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="contact--section" id="Contact" >
      <Box mt={"2%"}>
        <Heading fontSize={"40px"}>Contact Me</Heading>
      </Box>
      <Flex direction={"column"} alignItems={"center"} >
        <Flex w={["100%","80%","80%","80%"]} py={"1%"} px={"2%"} alignItems={"center"} justifyContent={"space-between"}>
          <a
            href="https://www.linkedin.com/in/aarif-shazz-638647208/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin fontSize={"35px"} className="linkedin" id="contact-linkedin" 
             />
          </a>
          <a
            href="https://github.com/AariF-ShazZ"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub fontSize={"35px"} className="github" id="contact-github" />
          </a>
          <a
            href="mailto:aarif568khan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail  fontSize={"35px"} className="email" id="contact-email" />
          </a>
          <a href="tel:+919717971424" target="_blank" rel="noreferrer" id="contact-phone" >
            <BsFillTelephoneFill  fontSize={"35px"} className="phone" />
          </a>
        </Flex>
        <Heading mt={"5%"} fontSize={["15px", "20px", "20px", "35px"]}>Created By Aarif Phone No.- 9717971424</Heading>
      </Flex>
    </section>
  );
}
