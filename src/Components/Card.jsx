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
      bg="white"
      rounded="2xl"
      overflow="hidden"
      boxShadow="0 10px 30px rgba(0,0,0,0.08)"
      transition="all 0.35s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
      }}
    >
      {/* Image */}
      <Box overflow="hidden">
        <Image
          src={img}
          alt={title}
          h="220px"
          w="100%"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
      </Box>

      {/* Content */}
      <Stack p={6} spacing={4}>
        <Heading fontSize="xl" fontWeight="600">
          {title}
        </Heading>

        <Text fontSize="sm" color="gray.600" noOfLines={3}>
          {description}
        </Text>

        {/* Tech stack */}
        <Wrap>
          {tech.map((item, index) => (
            <WrapItem key={index}>
              <Tag
                size="sm"
                variant="subtle"
                colorScheme="green"
                borderRadius="full"
              >
                {item}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* Buttons */}
        <Flex gap={4} pt={3}>
          <Button
            as="a"
            href={links[0]}
            target="_blank"
            variant="outline"
            colorScheme="gray"
            size="sm"
            w="full"
          >
            GitHub
          </Button>

          <Button
            as="a"
            href={links[1]}
            target="_blank"
            colorScheme="green"
            size="sm"
            w="full"
          >
            Live Demo
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Card;
