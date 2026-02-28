import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const socialStyle = {
  size: "lg",
  rounded: "full",
  bg: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  color: "white",
  transition: "all 0.35s ease",
  _hover: {
    transform: "translateY(-6px) scale(1.05)",
    bgGradient: "linear(to-r, #ff0055, #ff7a18)",
    boxShadow: "0 15px 40px rgba(255,0,85,0.45)",
  },
};

export default function ContactMe() {
  return (
    <Box
      as="section"
      id="Contact"
      py={{ base: 16, md: 24 }}
      textAlign="center"
      bgGradient="linear(180deg, #0a0a0a 0%, #050505 100%)"
    >
      {/* Heading */}
      <Stack spacing={3} mb={12}>
        <Heading
          fontSize={{ base: "34px", md: "48px" }}
          fontWeight="900"
          bgGradient="linear(to-r, #ff0055, #ff7a18)"
          bgClip="text"
        >
          Let’s Connect
        </Heading>

        <Text
          maxW="650px"
          mx="auto"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          color="gray.400"
          lineHeight="1.8"
        >
          Feel free to reach out for collaborations, opportunities, or just to
          say hello 👋
        </Text>
      </Stack>

      {/* Social Icons */}
      <Flex justify="center" gap={{ base: 4, md: 6 }} flexWrap="wrap">
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin size={22} />}
          as="a"
          href="https://www.linkedin.com/in/aarif-shazz-638647208/"
          target="_blank"
          {...socialStyle}
        />

        <IconButton
          aria-label="GitHub"
          icon={<VscGithub size={22} />}
          as="a"
          href="https://github.com/AariF-ShazZ"
          target="_blank"
          {...socialStyle}
        />

        <IconButton
          aria-label="Email"
          icon={<CgMail size={22} />}
          as="a"
          href="mailto:aarif568khan@gmail.com"
          target="_blank"
          {...socialStyle}
        />

        <IconButton
          aria-label="Phone"
          icon={<BsFillTelephoneFill size={20} />}
          as="a"
          href="tel:+919717971424"
          target="_blank"
          {...socialStyle}
        />
      </Flex>

      {/* Footer Text */}
      <Text
        mt={14}
        fontSize={{ base: "13px", md: "14px" }}
        color="gray.500"
        letterSpacing="0.5px"
      >
        © {new Date().getFullYear()} Aarif Khan — Crafted with ❤️ & React
      </Text>
    </Box>
  );
}
