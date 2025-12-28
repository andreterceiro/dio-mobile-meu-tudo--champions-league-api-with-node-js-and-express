import {Request, Response} from "express";
import { insertPlayerService, getPlayerDataService, getPlayerByIdService, deletePlayerByIdService, updatePlayerByIdService } from "../services/players-service";

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

export async function deletePlayerById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await deletePlayerByIdService(id);
    res.status(data.statusCode).json(data.body);
}

export async function updatePlayerById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = await updatePlayerByIdService(id, req.body);
    res.status(data.statusCode).json(data.body);
}