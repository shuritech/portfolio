import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text fontSize='xs'>© 2023 Matteo Zandonai | Shuritech. All rights reserved</Text>
        <Text fontSize='xs'>Made with Chakra React</Text>
        
      </Container>
    </Box>
  );
}
