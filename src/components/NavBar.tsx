import {HStack , Image, Text} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'
interface Props
{
    onSearch : (searchText:string) => void;
}
export default function NavBar({onSearch}:Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize='60px'/>
        <SearchBar  onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}