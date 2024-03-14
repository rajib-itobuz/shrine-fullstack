import { Router } from "express";
import { homeRoutes } from './home/homeRoutes.js';
import { subscribeRoute } from "./subscribe/subscriptionRoute.js";

export default function manageRoute(route) {
    const router = Router();

    homeRoutes(router);
    subscribeRoute(router);

    return router;
}