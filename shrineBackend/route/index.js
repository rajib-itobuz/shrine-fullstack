import { Router } from "express";
import { homeRoutes } from './home/homeRoutes.js';

export default function manageRoute(route) {
    const router = Router();
    homeRoutes(router);
    return router;
}