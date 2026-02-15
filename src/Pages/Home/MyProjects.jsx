import { Box, Grid, Heading, Text, Stack } from "@chakra-ui/react";
import Card from "../../Components/Card";
import { projects } from "../../data";

export default function MyProjects() {
  return (
    <Box as="section" id="MyProjects" py={{ base: 16, md: 24 }}>
      <Stack spacing={3} textAlign="center" mb={14}>
        <Heading
          fontSize={{ base: "32px", md: "44px" }}
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          Featured Projects
        </Heading>
        <Text
          maxW="720px"
          mx="auto"
          fontSize={{ base: "md", md: "lg" }}
          color="gray.500"
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
        gap={8}
      >
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </Grid>
    </Box>
  );
}
