import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";

const PersonalInfo = ({
  avatarUrl,
  userid,
  fullname,
  bio,
  followers,
  following,
}) => {
  return (
    <Box padding="2" borderRadius="sm">
      <Stack spzacing="2rem">
        <Avatar
          src={avatarUrl}
          size="5xl"
          alignSelf="center"
          showBorder
          borderColor="gray.50"
        />
        <Box>
          <Heading as="h5" fontSize="1.5rem">
            {fullname}
          </Heading>
          <Text color="gray.500" fontSize="lg">
            {userid}
          </Text>
          <Text mt="4">{bio}</Text>

          <Stack direction="row" alignItems="center" mt="6">
            <Stack
              direction="row"
              spacing="1"
              alignItems="center"
              _after={{
                content: '"∙"',
                fontSize: "1.2rem",
                fontFamily: "cursive",
                lineHeight: "0",
                padding: "0px 4px",
              }}
            >
              <Box as={FiUsers} size="1em" color="gray.900" />
              <Text fontWeight="bold">{followers}</Text>
              <Text color="gray.500">Followers</Text>
            </Stack>

            <Stack direction="row" spacing="1" alignItems="center">
              <Text fontWeight="bold">{following}</Text>
              <Text color="gray.500">Following</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PersonalInfo;
