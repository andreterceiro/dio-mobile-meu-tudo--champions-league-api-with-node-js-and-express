import express, {Request, Response} from "express";
import { getPlayerData } from "../services/players-service";
import { ok } from "../utils/http-helper";

async function getPlayer(req: Request, res: Response) {
    const data = await getPlayerData();
    const response = await ok(data);
    res.status(response.statusCode).json(response.body);
}

export default getPlayer;