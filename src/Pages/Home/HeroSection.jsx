import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function HeroSection() {
  const openDriveLink = (driveLink) => {
    window.open(driveLink, "_blank");
  };

  return (
    <section id="heroSection" className="hero--section dark-hero">
      <Flex
        className="hero--section--content--box"
        direction={{ base: "column-reverse", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, lg: 0 }}
        maxW="1300px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={{ base: 24, md: 28 }}
      >
        {/* Left Content */}
        <Box
          className="hero--section--content"
          textAlign={{ base: "center", lg: "left" }}
          maxW="640px"
        >
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="600"
            color="#ff7a18"
            letterSpacing="0.15em"
            textTransform="uppercase"
            mb={3}
          >
            Full Stack Developer
          </Text>

          <Heading
            fontSize={{ base: "36px", md: "52px", lg: "64px" }}
            lineHeight={{ base: "44px", md: "60px", lg: "72px" }}
            fontWeight="900"
            mb={6}
            color="white"
          >
            I Build Scalable <br />
            <span className="gradient-text">Web Applications</span>
          </Heading>

          <Text
            fontSize={{ base: "15px", md: "17px", lg: "18px" }}
            color="gray.400"
            mb={10}
            lineHeight="1.8"
          >
            Full Stack Engineer with strong expertise in MERN & Next.js,
            specializing in crafting high-performance, scalable, and
            user-focused web applications that solve real business problems.
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={5}
            justify={{ base: "center", lg: "flex-start" }}
          >
            <Button
              size="lg"
              bg="linear-gradient(135deg,#ff0055,#ff7a18)"
              color="white"
              px={10}
              py={6}
              fontSize="16px"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 15px 40px rgba(255,0,85,0.35)",
              }}
              transition="all 0.3s ease"
              onClick={() =>
                openDriveLink(
                  "https://drive.google.com/file/d/1hO4XMMxV2ygppxbAizenVU57XgrU7xNu/view?usp=sharing",
                )
              }
            >
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="#ff0055"
              color="#ff0055"
              px={10}
              py={6}
              fontSize="16px"
              _hover={{
                bg: "#ff0055",
                color: "white",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              onClick={() => {
                document
                  .getElementById("Contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let’s Talk
            </Button>
          </Stack>
        </Box>

        {/* Right Image */}
        <Flex
          className="hero--section--img"
          align="center"
          justify="center"
          w={{ base: "260px", md: "340px", lg: "420px" }}
          position="relative"
        >
          <Box
            position="absolute"
            inset="-20px"
            bg="linear-gradient(135deg,#ff0055,#ff7a18)"
            filter="blur(80px)"
            opacity={0.35}
            borderRadius="full"
            zIndex={0}
          />
          <Box
            position="relative"
            w={{ base: "220px", sm: "260px", md: "300px", lg: "340px" }}
            h={{ base: "220px", sm: "260px", md: "300px", lg: "340px" }}
            borderRadius="50%"
            bgGradient="linear(135deg, #ff0055, #ff7a18)"
            p="4px"
            boxShadow="0 0 60px rgba(255,0,85,0.45)"
            animation="float 6s ease-in-out infinite"
          >
            {/* Glow ring */}
            <Box
              position="absolute"
              inset="-12px"
              borderRadius="50%"
              bgGradient="linear(135deg, #ff0055, #ff7a18)"
              opacity="0.25"
              filter="blur(25px)"
              zIndex={0}
            />

            {/* Image wrapper */}
            <Box
              position="relative"
              w="100%"
              h="100%"
              borderRadius="50%"
              overflow="hidden"
              bg="black"
              zIndex={1}
            >
              <Image
                src="./img/Aarif.png"
                alt="Aarif Khan"
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>
          </Box>{" "}
        </Flex>
      </Flex>
    </section>
  );
}
