import express from "express";
import router from "./router";

function createApp() {
    const app = express();
    app.use(express.json());

    app.use('/api', router);

    return app;
}

export default createApp;