import {Request, Response} from "express";
import { insertPlayerService, getPlayerDataService, getPlayerByIdService } from "../services/players-service";

export async function getPlayer(req: Request, res: Response) {
    const data = await getPlayerDataService();
    res.status(data.statusCode).json(data.body);
};

export async function getPlayerById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await getPlayerByIdService(id);

    res.status(data.statusCode).json(data.body);
};

export async function insertPlayer(req: Request, res: Response) {
    const data = await insertPlayerService(req.body);
    res.status(data.statusCode).json(data.body);
}