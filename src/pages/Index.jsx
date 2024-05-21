import { Container, Text, VStack, Heading, Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [attendance, setAttendance] = useState([
    { name: "John Doe", status: "Present" },
    { name: "Jane Smith", status: "Absent" },
    { name: "Alice Johnson", status: "Present" },
  ]);

  const toggleStatus = (index) => {
    const newAttendance = [...attendance];
    newAttendance[index].status = newAttendance[index].status === "Present" ? "Absent" : "Present";
    setAttendance(newAttendance);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={6}>Team Attendance Tracker</Heading>
        <Box width="100%" overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {attendance.map((member, index) => (
                <Tr key={index}>
                  <Td>{member.name}</Td>
                  <Td>{member.status}</Td>
                  <Td>
                    <Button onClick={() => toggleStatus(index)}>
                      Mark as {member.status === "Present" ? "Absent" : "Present"}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;