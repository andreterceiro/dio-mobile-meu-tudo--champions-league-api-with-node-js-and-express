import express from "express";
import configuringEndpoints from './controllers/players-controller'

function createApp() {
    const app = express();
    app.use(express.json());

    configuringEndpoints(app);

    return app;
}

export default createApp;