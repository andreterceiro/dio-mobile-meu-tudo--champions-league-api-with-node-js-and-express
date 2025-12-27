import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 80,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 34,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 81,
            "Shooting": 92,
            "Passing": 78,
            "Dribbling": 84,
            "Defending": 34,
            "Physical": 75
        }
    },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return database.find((entry) => {
        entry.id === id
    });
}