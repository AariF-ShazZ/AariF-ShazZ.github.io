import { Flex, Image, Text, Box } from "@chakra-ui/react";

const SkillsCard = ({ icon, text }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={6}
      rounded="xl"
      bg="rgba(255,255,255,0.03)"
      border="1px solid rgba(255,255,255,0.08)"
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 15px 40px rgba(255,0,85,0.35)",
        borderColor: "#ff0055",
      }}
    >
      <Box
        bg="rgba(255,255,255,0.08)"
        p={4}
        rounded="lg"
        mb={4}
      >
        <Image src={icon} alt={text} w="45px" />
      </Box>

      <Text fontSize="16px" fontWeight="600" color="white">
        {text}
      </Text>
    </Flex>
  );
};

export default SkillsCard;
