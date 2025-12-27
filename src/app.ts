import express from "express";
import configuringEndpoints from './controllers/players-controller'
import router from "./router";

function createApp() {
    const app = express();
    app.use(express.json());

    app.use('/api', router);

    return app;
}

export default createApp;