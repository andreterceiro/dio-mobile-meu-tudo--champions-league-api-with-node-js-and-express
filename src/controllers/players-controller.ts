import express, {Request, Response} from "express";

function getPlayer(request: Request, response: Response) {
    response.send({id: 1, name: "CR7"});
}

export default getPlayer;