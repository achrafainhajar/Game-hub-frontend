import React from 'react'
import { Game } from '../hooks/useGames';
import { Badge, Card, CardBody, HStack, Heading, Image, Text, Wrap } from '@chakra-ui/react';
import PlatformIcons from './PlatformIcons';
import GameScore from './GameScore';

interface Props {

    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={game.background_image} />
            <CardBody>

                <Heading fontSize="2xl">
                    {game.name}
                </Heading>
                <HStack justify={'space-between'}>
                    <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
                    <GameScore score={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>
    )
}

export default GameCard