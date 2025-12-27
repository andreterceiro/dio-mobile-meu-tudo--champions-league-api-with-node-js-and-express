import express, {Request, Response} from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Hello world");
})

app.listen(process.env.PORT);
console.log("end of server.ts");
console.log(process.env.PORT)