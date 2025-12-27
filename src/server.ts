import express, {Request, Response} from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Hello world");
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running in the port ${port}`)
});

// Current video: separando a server da app