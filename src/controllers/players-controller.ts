import {Request, Response} from "express";
import { getPlayerData } from "../services/players-service";

async function getPlayer(req: Request, res: Response) {
    const data = await getPlayerData();
    res.status(data.statusCode).json(data.body);
}

export default getPlayer;