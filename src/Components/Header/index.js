import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const Header = ({ searchValue, onSearchChange, onSubmit }) => {
  return (
    <Box height="60px" boxShadow="sm">
      <Flex
        alignItems="center"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <Box width="500px" as="form" onSubmit={onSubmit}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              placeholder="Search user"
              value={searchValue}
              onChange={onSearchChange}
              boxShadow="sm"
            />
          </InputGroup>
          <input type="submit" hidden />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
