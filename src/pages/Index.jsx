import { Box, Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Your New React App</Text>
          <Text>Start building something amazing!</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;