import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';
import React, { useRef } from 'react';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form
      style={{ paddingLeft: '105px', width: '85%' }}
      onSubmit={handleSubmit}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius="20px"
          placeholder="Search game..."
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
