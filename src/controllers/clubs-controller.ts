import {Request, Response} from "express";
import { getClubsDataService} from "../services/clubs-service";

export async function getClubs(req: Request, res: Response) {
    const data = await getClubsDataService();
    res.status(data.statusCode).json(data.body);
};