import express, {Request, Response} from "express";
import { getPlayerData } from "../services/players-service";


async function getPlayer(request: Request, response: Response) {
    response.send(await getPlayerData());
}

export default getPlayer;