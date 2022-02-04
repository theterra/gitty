import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ searchValue, onSearchChange }) => {
  return (
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
        data-testid="search-input"
      />
    </InputGroup>
  );
};

export default SearchInput;
