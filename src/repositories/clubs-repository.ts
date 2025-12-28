import { ClubModel } from "../models/club-model";
import fs from "fs";

let database: ClubModel[] = JSON.parse(fs.readFileSync(__dirname + "/../data/clubs.json").toString());
export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
}