import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Card = ({ title, description, tech, links, img }) => {
  return (
    <Box
      role="group"
      bg="rgba(15,15,20,0.85)"
      backdropFilter="blur(14px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="2xl"
      overflow="hidden"
      transition="all 0.4s ease"
      position="relative"
      _hover={{
        transform: "translateY(-10px) scale(1.01)",
        boxShadow: "0 30px 80px rgba(255, 0, 85, 0.25)",
        borderColor: "#ff0055",
      }}
    >
      {/* Glow Border Effect */}
      <Box
        position="absolute"
        inset="0"
        rounded="2xl"
        bgGradient="linear(135deg, transparent, rgba(255,0,85,0.15), transparent)"
        opacity="0"
        transition="opacity 0.4s ease"
        _groupHover={{ opacity: 1 }}
        pointerEvents="none"
      />

      {/* Image */}
      <Box overflow="hidden">
        <Image
          src={img}
          alt={title}
          h="220px"
          w="100%"
          objectFit="cover"
          transition="transform 0.6s ease"
          _groupHover={{ transform: "scale(1.08)" }}
        />
      </Box>

      {/* Content */}
      <Stack p={6} spacing={4} position="relative" zIndex={1}>
        <Heading
          fontSize="xl"
          fontWeight="800"
          letterSpacing="-0.02em"
          color="white"
        >
          {title}
        </Heading>

        <Text
          fontSize="sm"
          color="gray.300"
          lineHeight="1.75"
          noOfLines={3}
        >
          {description}
        </Text>

        {/* Tech stack */}
        <Wrap>
          {tech.map((item, index) => (
            <WrapItem key={index}>
              <Tag
                size="sm"
                px={3}
                py={1.5}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="white"
                fontWeight="600"
                borderRadius="full"
                letterSpacing="0.3px"
                _hover={{
                  bg: "linear-gradient(135deg, #ff0055, #ff7a18)",
                  borderColor: "transparent",
                }}
              >
                {item}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* Buttons */}
        <Flex gap={4} pt={4}>
          <Button
            as="a"
            href={links[0]}
            target="_blank"
            size="sm"
            w="full"
            bg="whiteAlpha.100"
            color="white"
            border="1px solid"
            borderColor="whiteAlpha.300"
            _hover={{
              bg: "whiteAlpha.200",
              borderColor: "#ff0055",
              transform: "translateY(-2px)",
            }}
          >
            GitHub
          </Button>

          <Button
            as="a"
            href={links[1]}
            target="_blank"
            size="sm"
            w="full"
            bgGradient="linear(to-r, #ff0055, #ff7a18)"
            color="white"
            fontWeight="700"
            _hover={{
              opacity: 0.95,
              transform: "translateY(-2px)",
              boxShadow: "0 12px 30px rgba(255,0,85,0.45)",
            }}
          >
            Live Demo
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Card;
