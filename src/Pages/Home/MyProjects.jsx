import { Box, Grid, Heading, Text, Stack } from "@chakra-ui/react";
import Card from "../../Components/Card";
import { projects } from "../../data";

export default function MyProjects() {
  return (
    <Box
      as="section"
      id="MyProjects"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)"
    >
      <Stack spacing={4} textAlign="center" justifyContent={"center"} mb={14} border={"solid 2px blue"}>
        <Heading
          fontSize={{ base: "34px", md: "44px", lg: "56px" }}
          fontWeight="900"
          bgGradient="linear(to-r, #ff0055, #ff7a18)"
          bgClip="text"
        >
          Featured Projects
        </Heading>
        <Text
          maxW="720px"
          // mx="auto"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          color="gray.600"
          lineHeight="1.8"
        >
          A collection of real-world applications I’ve built using modern web
          technologies, focusing on performance, scalability, and delightful UX.
        </Text>
      </Stack>

      <Grid
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
      >
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </Grid>
    </Box>
  );
}
