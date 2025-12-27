import {Router} from "express";
import getPlayer from "./controllers/players-controller";

const router = Router();

router.get('/api/players', getPlayer);

export default router;