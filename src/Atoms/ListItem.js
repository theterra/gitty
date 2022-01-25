import { Box, Stack, Text } from "@chakra-ui/react";

const ListItem = ({ value, label, icon, isLast = false }) => {
  return (
    <Stack
      direction="row"
      spacing="1"
      alignItems="center"
      _after={
        !isLast
          ? {
              content: '"∙"',
              fontSize: "1.2rem",
              fontFamily: "cursive",
              lineHeight: "0",
              padding: "0px 4px",
            }
          : undefined
      }
    >
      {icon && <Box as={icon} size="1em" color="gray.900" />}
      <Text fontWeight="bold">{value}</Text>
      <Text color="gray.500">{label}</Text>
    </Stack>
  );
};

export default ListItem;
