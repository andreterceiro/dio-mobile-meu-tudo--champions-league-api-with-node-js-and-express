import {Request, Response} from "express";
import { getPlayerDataService, getPlayerByIdService } from "../services/players-service";
import { PlayerModel } from "../models/player-model";

export async function getPlayer(req: Request, res: Response) {
    const data = await getPlayerDataService();
    res.status(data.statusCode).json(data.body);
}

export async function getPlayerById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await getPlayerByIdService(id);
    // console.log(data);

    res.status(data.statusCode).json(data.body);
}