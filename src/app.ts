import express, {Request, Response} from "express";

function createApp() {
    const app = express();

    app.get("/", (request: Request, response: Response) => {
        response.send("Hello world");
    });
}