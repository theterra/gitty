import { Box, Center, Text } from "@chakra-ui/react";

const MessageBoard = ({ component, title }) => {
  return (
    <Center flexDirection="column">
      <Box as={component} width="40vw" height="40vh" />
      <Text mt="1rem">{title}</Text>
    </Center>
  );
};

export default MessageBoard;
