import { Heading } from '@chakra-ui/react'
import { Gamequery } from "../App";
import React from 'react'

interface  Props
{
    gameQuery : Gamequery,
}
const GameHeading = ({gameQuery} : Props) => {
  const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`
    return (
    <Heading marginY={3} fontSize={"5xl"} as='h1'>{heading}</Heading>
  )
}

export default GameHeading