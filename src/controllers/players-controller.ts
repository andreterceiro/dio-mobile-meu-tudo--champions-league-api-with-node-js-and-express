import express, {Request, Response} from "express";
import { getPlayerData } from "../services/players-service";
import { HttpResponse } from "../models/http-response-model"

async function getPlayer(req: Request, res: Response) {
    const data = await getPlayerData();
    res.status(data.statusCode).json(data.body);
}

export default getPlayer;