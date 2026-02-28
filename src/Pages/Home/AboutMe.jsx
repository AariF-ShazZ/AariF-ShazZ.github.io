import { VStack, Text, Heading, Box, Flex, Image } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <section className="about--section" id="AboutMe">
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 12, lg: 20 }}
        align="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 8 }}
      >
        {/* Image */}
        <Box
          flex="1"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 25px 60px rgba(0,0,0,0.6)"
        >
          <Image
            src="./img/userAbout.jpg"
            alt="About Aarif"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        {/* Content */}
        <VStack flex="1.2" align="flex-start" spacing={6}>
          <Heading
             fontSize={{ base: "34px", md: "44px", lg: "56px" }}
          fontWeight="900"
          bgGradient="linear(to-r, #ff0055, #ff7a18)"
          bgClip="text"
            letterSpacing="0.5px"
            position="relative"
            // _after={{
            //   content: '""',
            //   position: "absolute",
            //   left: 0,
            //   bottom: "-14px",
            //   width: "90px",
            //   height: "5px",
            //   borderRadius: "full",
            //   bg: "linear-gradient(135deg,#ff0055,#ff7a18)",
            // }}
          >
            About Me
          </Heading>

          <VStack
            align="flex-start"
            spacing={4}
            fontSize={{ base: "15px", md: "17px", lg: "18px" }}
            color="gray.500"
            lineHeight="1.8"
          >
            <Text>
              Hi, I’m{" "}
              <strong style={{ color: "#ff7a18" }}>Aarif</strong>, a Full Stack
              Developer with{" "}
              <strong style={{ color: "#ff7a18" }}>2.5+ years</strong> of
              experience building scalable, high-performance web applications.
            </Text>

            <Text>
              I specialize in building modern frontend architectures and robust
              backend systems using MERN & Next.js with a strong focus on
              performance, maintainability, and scalability.
            </Text>

            <Text>
              Currently at{" "}
              <strong style={{ color: "#ff7a18" }}>NationFirstChoice</strong>,
              working on production-grade CRM platforms, authentication systems,
              real-time dashboards, and secure backend APIs.
            </Text>

            <Text>
              Tech stack: React, Next.js, TypeScript, Node.js, Express, MongoDB,
              Redux, Chakra UI, Material UI, Tailwind CSS.
            </Text>

            <Text>
              Outside of work, I enjoy traveling, learning new technologies, and
              solving real-world problems through software.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </section>
  );
}
