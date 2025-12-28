import { ClubModel } from "../models/club-model";

let database: ClubModel[] = [
    {
        "id": 1,
        "name": "Corinthians",
    },
    {
        "id": 2,
        "name": "Palmeiras",
    },
    {
        "id": 3,
        "name": "Santos",
    },
    {
        "id": 4,
        "name": "São Paulo",
    }
]

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
}