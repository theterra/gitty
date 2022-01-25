import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SearchInput from "Atoms/SearchInput";

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
          <SearchInput
            searchValue={searchValue}
            onSearchChange={onSearchChange}
          />
          <input type="submit" hidden />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
