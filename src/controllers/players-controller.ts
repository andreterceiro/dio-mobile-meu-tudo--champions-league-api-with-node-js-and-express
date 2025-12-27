import express, {Request, Response} from "express";
import { getPlayerData } from "../services/players-service";


async function getPlayer(request: Request, response: Response) {
    response.status(200).json(await getPlayerData());
}

export default getPlayer;