// lib/app.ts
import * as express from "express";
import { Routes } from "./routes";

class App {

    public app: express.Application;
    public routeProvider: Routes = new Routes();

    constructor() {
        this.app = express();
        this.routeProvider.routes(this.app);     
    }
}

export default new App().app;