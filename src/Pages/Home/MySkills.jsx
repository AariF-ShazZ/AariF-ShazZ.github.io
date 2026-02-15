import { Grid, Heading, Text, VStack, Box } from "@chakra-ui/react";
import SkillsCard from "../../Components/SkillsCard";
import { skills } from "../../data";

export default function MySkills() {
  return (
    <section className="skills--section dark-section" id="mySkills">
      <Box maxW="1300px" mx="auto" px={{ base: 5, md: 8 }} py={{ base: 20, md: 28 }}>
        <VStack spacing={3} textAlign="center" mb={14}>
          <Heading
            fontSize={{ base: "30px", md: "40px", lg: "48px" }}
            fontWeight="900"
            color="white"
          >
            My <span className="gradient-text">Tech Stack</span>
          </Heading>

          <Text
            maxW="760px"
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            color="gray.400"
          >
            A modern, scalable, and production-ready technology stack that I use
            to design, develop, and deploy high-performance full-stack web
            applications.
          </Text>
        </VStack>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={{ base: 6, md: 10 }}
        >
          {skills.map((item, index) => (
            <SkillsCard key={index} {...item} />
          ))}
        </Grid>
      </Box>
    </section>
  );
}
