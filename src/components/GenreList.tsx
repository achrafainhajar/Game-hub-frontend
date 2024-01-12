import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import useData from '../hooks/useData';
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text, useFocusEffect } from '@chakra-ui/react';

interface Props
{
    Onselectgenre:(genre:Genre) => (void);
    selectedGenre: Genre | null;
}
const GenreList = ({Onselectgenre , selectedGenre} :Props) => {
    const { data ,error,isloading} = useGenres();
    if(error)
        return (<Text>{error}</Text>)
    if(isloading)
        return <Spinner/>
    return (
        <>
        <Heading marginBottom={3} fontSize={"2xl"}>Genres</Heading>
        <List>
            
            {data.map((item) => <ListItem paddingY={"5px"} key={item.id}>
                <HStack>
                    <Image objectFit={"cover"} boxSize={"32px"} borderRadius={8} src={item.image_background} />
                    <Button whiteSpace="normal" textAlign={"left"} fontWeight={item.id === selectedGenre?.id ? 'bold' : 'normal'} variant={"link"} onClick={() => Onselectgenre(item)} fontSize={"lg"}>{item.name}</Button>
                </HStack>
            </ListItem>
            )}
        </List>
        </>
    )
}

export default GenreList