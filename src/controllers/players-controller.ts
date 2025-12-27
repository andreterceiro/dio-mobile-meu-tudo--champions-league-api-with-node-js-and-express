import express, {Request, Response} from "express";

function configuringEndpoints(app: express.Application) {
    app.get("/", (request: Request, response: Response) => {
        response.send("Hello world");
    });
}

export default configuringEndpoints;