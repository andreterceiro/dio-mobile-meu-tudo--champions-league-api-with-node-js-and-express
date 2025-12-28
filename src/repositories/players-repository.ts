import { PlayerModel } from "../models/player-model";
import fs from "fs";

let database: PlayerModel[] = JSON.parse(fs.readFileSync(__dirname + "/../data/players.json").toString());

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return database.find((entry) => entry.id === id);
}

export const insertPlayer = async(data: any): Promise<boolean> => {
    database.push(data);
    return true;
}

export const removePlayerById = async (id: number): Promise<boolean> => {
    const index = database.findIndex(p => p.id === id);
    if (index != -1) {
        database.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

export const updatePlayerById = async (id: number, data: PlayerModel): Promise<boolean> => {
    const index = database.findIndex(p => p.id === id);
    if (index != -1) {
        database[index]= data;
        return true;
    } else {
        return false;
    }
}