import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from 'axios'
import useData from "./useData";
import { Genre } from "./useGenres";
import { Gamequery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = (gameQuery:Gamequery) => useData<Game>('/games',
{ params: 
    { genres: gameQuery.genre?.id,search: gameQuery.searchtext, platforms: gameQuery.platform?.id , ordering: gameQuery.sortorder}
 },
 [gameQuery.genre?.id, gameQuery.platform?.id]);
export default useGames;