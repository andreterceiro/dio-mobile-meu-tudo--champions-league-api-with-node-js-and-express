import { insertPlayer, findAllPlayers, findPlayerById } from "../repositories/players-repository";
import { noContent, ok, created } from "../utils/http-helper";

export const getPlayerDataService = async () => {
    const data = await findAllPlayers();

    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerById(id);

    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}
export const insertPlayerService = async (data: Object) => {
    await insertPlayer(data);
    return await created(data);
}