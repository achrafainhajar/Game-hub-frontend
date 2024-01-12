import React from 'react'

import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props
{
   onSelectSortOrded : (sortorder:string) => void
}
const DateSelector = ({onSelectSortOrded} : Props ) => {
  const sortorder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Ordered by: Relevence</MenuButton>
      <MenuList>
        {sortorder.map((order) =>
          (<MenuItem onClick={() => {onSelectSortOrded(order.value)}}
            key={order.value} value={order.value}>{order.label}
          </MenuItem>))}
      </MenuList>
    </Menu>
  )
}

export default DateSelector