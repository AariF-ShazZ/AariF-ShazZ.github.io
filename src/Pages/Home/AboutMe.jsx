import { VStack, Text, Heading, Flex, Box, Image } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <section className="about--section dark-section" id="AboutMe">
      <Flex
        maxW="1300px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", lg: "row" }}
        align="center"
        gap={{ base: 12, lg: 20 }}
      >
        {/* Image */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          position="relative"
        >
          <Box
            position="absolute"
            inset="-20px"
            bg="linear-gradient(135deg,#ff0055,#ff7a18)"
            filter="blur(100px)"
            opacity={0.25}
            borderRadius="full"
          />
          <Image
            src="./img/userAbout.jpg"
            alt="About Aarif Khan"
            rounded="2xl"
            zIndex={1}
            w={{ base: "260px", md: "340px", lg: "380px" }}
            objectFit="cover"
          />
        </Box>

        {/* Content */}
        <Box flex="1.3">
          <Heading
            fontSize={{ base: "32px", md: "42px", lg: "50px" }}
            fontWeight="900"
            mb={6}
            color="white"
          >
            About <span className="gradient-text">Me</span>
          </Heading>

          <VStack
            alignItems="flex-start"
            spacing={5}
            color="gray.400"
            fontSize={{ base: "15px", md: "16px", lg: "18px" }}
            lineHeight="1.9"
          >
            <Text>
              Hi, I’m <strong style={{ color: "#fff" }}>Aarif Khan</strong>, a
              Full Stack Developer with{" "}
              <strong style={{ color: "#ff7a18" }}>
                2.5+ years of hands-on experience
              </strong>{" "}
              building scalable, high-performance web applications using MERN &
              Next.js.
            </Text>

            <Text>
              I specialize in crafting clean, maintainable, and user-centric
              solutions with a strong focus on performance, responsiveness, and
              scalable architecture. I enjoy converting complex business
              workflows into simple and intuitive digital products.
            </Text>

            <Text>
              Currently, I’m working as a Full Stack Developer at{" "}
              <strong style={{ color: "#fff" }}>NationFirstChoice</strong>, where
              I build production-grade systems including a real-time CRM for car
              rental reservations, handling frontend engineering, backend APIs,
              authentication, and database design.
            </Text>

            <Text>
              My technical skill set includes React, Next.js, Node.js, Express,
              MongoDB, Redux, TypeScript, Material UI, Chakra UI, and Tailwind
              CSS. I constantly upgrade my skill set to stay ahead in modern web
              development.
            </Text>

            <Text>
              Outside coding, I enjoy traveling, exploring cultures, and gaining
              fresh perspectives that influence both personal growth and product
              thinking.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </section>
  );
}
