import { PlayerModel } from "../models/player-model";

let database: PlayerModel[] = [
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
    {
        "id": 3,
        "name": "Neymar",
        "club": "Santos",
        "nationality": "Brasil",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 81,
            "Shooting": 92,
            "Passing": 85,
            "Dribbling": 90,
            "Defending": 34,
            "Physical": 62
        }
    },
]

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