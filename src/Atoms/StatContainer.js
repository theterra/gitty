import { Box, Text } from "@chakra-ui/react";

const StatContainer = ({ children, title, ...other }) => {
  return (
    <Box height="40vh" boxShadow="md" borderRadius="sm" {...other}>
      <Box height="100%" width="100%">
        {children}
      </Box>
      <Text textAlign="center" mt="0.5rem">{title}</Text>
    </Box>
  );
};

export default StatContainer;
