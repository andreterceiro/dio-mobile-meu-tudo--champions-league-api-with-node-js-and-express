import { findAllClubs } from "../repositories/clubs-repository";
import { noContent, ok } from "../utils/http-helper";

export const getClubsDataService = async () => {
    const data = await findAllClubs();

    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}