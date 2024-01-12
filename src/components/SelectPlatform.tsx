import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface Props
{
    selected:(platform :Platform) => void;
    selectedP: Platform | null;
}
const SelectPlatform = ({selected,selectedP}:Props) => {
    const {data,error} = usePlatforms();


    if(error)
        return <Text>{error}</Text>
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedP?.name || "Platform"}</MenuButton>
        <MenuList>
            {data.map(item => <MenuItem onClick={() => selected(item)} key={item.id}> {item.name}</MenuItem> )}
        </MenuList>
    </Menu>
  )
}

export default SelectPlatform