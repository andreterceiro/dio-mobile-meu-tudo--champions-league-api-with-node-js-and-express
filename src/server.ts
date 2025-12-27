import express, {Request, Response} from "express";
import createApp from "./app";

const app = createApp();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running in the port ${port}`)
});