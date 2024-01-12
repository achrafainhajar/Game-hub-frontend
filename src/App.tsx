import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import SelectPlatform from './components/SelectPlatform';
import { Platform } from './hooks/useGames';
import DateSelector from './components/DateSelector';
import SearchBar from './components/SearchBar'
import GameHeading from './components/GameHeading'

export interface Gamequery
{
  genre: Genre | null;
  platform: Platform | null;
  sortorder:string;
  searchtext:string;
}
function App() {
  const [gameQuery , SetgameQuery] = useState<Gamequery>({} as Gamequery);
  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }
      } templateColumns={
        {
          base: "1fr",
          lg: "200px 1fr"
        }
      }>

        <GridItem area='nav'><NavBar onSearch={searchtext => SetgameQuery({...gameQuery,searchtext})} /></GridItem>
        <Show above="lg">
          <GridItem area='aside'><GenreList selectedGenre={gameQuery.genre} Onselectgenre={(genre) => SetgameQuery({...gameQuery,genre})} /></GridItem>
        </Show>
        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={3}>
          <SelectPlatform  selected={(platform) => SetgameQuery({...gameQuery,platform})} selectedP={gameQuery.platform}/>
          <DateSelector onSelectSortOrded={(sortorder) => SetgameQuery({...gameQuery,sortorder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>

    </>
  )
}

export default App
