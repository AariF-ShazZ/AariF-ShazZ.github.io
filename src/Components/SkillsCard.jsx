import { Flex, Image, Text, Box } from "@chakra-ui/react";

const SkillsCard = ({ icon, text }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={6}
      rounded="2xl"
      bg="#0f0f16"
      border="1px solid rgba(255,255,255,0.08)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px) scale(1.02)",
        borderColor: "#ff0055",
        boxShadow: "0 15px 40px rgba(255,0,85,0.35)",
      }}
    >
      <Box
        p={4}
        mb={4}
        rounded="xl"
        bg="rgba(255,255,255,0.08)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={icon} alt={text} w="44px" h="44px" />
      </Box>

      <Text
        fontSize="15px"
        fontWeight="600"
        color="white"
        textAlign="center"
        letterSpacing="0.5px"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default SkillsCard;
