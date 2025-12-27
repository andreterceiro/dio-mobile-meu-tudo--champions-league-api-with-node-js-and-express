import { noContent, ok } from "../utils/http-helper";

export const getPlayerData = async () => {
    const data = {id: 1, name: 'Ronaldo'};

    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}