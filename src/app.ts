import express, {Request, Response} from "express";

function createApp() {
    const app = express();
    app.use(express.json());

    app.get("/", (request: Request, response: Response) => {
        response.send("Hello world");
    });

    return app;
}

export default createApp;