import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Team Attendance Tracker</Heading>
        <Text fontSize="lg">Keep track of your team's attendance effortlessly.</Text>
        <Box bg="gray.100" p={10} borderRadius="md" boxShadow="md">
          <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
          <VStack spacing={5}>
            <Box display="flex" alignItems="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>Real-time attendance tracking</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>Detailed reports and analytics</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>Easy integration with existing tools</Text>
            </Box>
          </VStack>
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;