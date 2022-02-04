import { Box, Center, Text } from "@chakra-ui/react";

const MessageBoard = ({ component, title }) => {
  return (
    <Center flexDirection="column" data-testid="message-board">
      <Box as={component} width="40vw" height="40vh" data-testid="board-component"/>
      <Text mt="1rem" data-testid="board-title">{title}</Text>
    </Center>
  );
};

export default MessageBoard;
