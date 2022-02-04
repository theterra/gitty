import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import ListItem from "Atoms/ListItem";

const PersonalInfo = ({
  avatarUrl,
  userid,
  fullname,
  bio,
  followers,
  following,
}) => {
  return (
    <Box padding="2" borderRadius="sm" data-testid="user-information">
      <Stack spzacing="2rem">
        <Avatar
          src={avatarUrl}
          size="5xl"
          alignSelf="center"
          showBorder
          borderColor="gray.50"
          data-testid="user-avatar"
        />
        <Box>
          <Heading as="h5" fontSize="1.5rem" data-testid="user-fullname">
            {fullname}
          </Heading>
          <Text color="gray.500" fontSize="lg" data-testid="user-id">
            {userid}
          </Text>
          <Text mt="4">{bio}</Text>

          <Stack direction="row" alignItems="center" mt="6">
            <ListItem icons={FiUsers} label="Followers" value={followers} />
            <ListItem
              icon={FiUsers}
              label="Following"
              value={following}
              isLast
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PersonalInfo;
