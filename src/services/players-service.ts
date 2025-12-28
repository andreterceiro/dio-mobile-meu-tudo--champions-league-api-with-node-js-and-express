import { PlayerModel } from "../models/player-model";
import { insertPlayer, findAllPlayers, findPlayerById, removePlayerById, updatePlayerById } from "../repositories/players-repository";
import { noContent, ok, created, notFound } from "../utils/http-helper";

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
export const insertPlayerService = async (data: PlayerModel) => {
    if (data) {
        await insertPlayer(data);
        return await created(data);
    } else {
        return await noContent();
    }
}

export const deletePlayerByIdService = async (id: number) => {
    const success = await removePlayerById(id);
    let response = null;

    if (success) {
        response = await ok({idRemoved: id});
    } else {
        response = await notFound();
    }

    return response;
}

export const updatePlayerByIdService = async (id: number, data: PlayerModel) => {
    const success = await updatePlayerById(id, data);
    let response = null;

    if (success) {
        response = await ok({id: id});
    } else {
        response = await notFound();
    }

    return response;
}


