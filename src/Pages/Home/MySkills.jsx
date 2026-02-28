import { Grid, Heading, Text, VStack, Box } from "@chakra-ui/react";
import SkillsCard from "../../Components/SkillsCard";
import { skills } from "../../data";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <VStack spacing={4} textAlign="center" mb={14} border={"solid 2px blue"}>
        <Heading
         fontSize={{ base: "34px", md: "44px", lg: "56px" }}
          fontWeight="900"
          bgGradient="linear(to-r, #ff0055, #ff7a18)"
          bgClip="text"
        >
          Tech Stack & Tools
        </Heading> 

        <Text
          maxW="720px"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          color="gray.500"
          lineHeight="1.7"
        >
          A production-ready, modern technology stack used to build scalable and
          high-performance applications.
        </Text>
      </VStack>

      <Box>
        <Grid
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 6 }}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={{ base: 6, md: 10 }}
        >
          {skills?.map((item, index) => (
            <SkillsCard key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>
      </Box>
    </section>
  );
}
