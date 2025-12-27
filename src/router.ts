import {Router} from "express";
import {getPlayer, getPlayerById, insertPlayer} from "./controllers/players-controller";

const router = Router();

router.get('/players', getPlayer);
router.get('/players/:id', getPlayerById);
router.post('/players', insertPlayer);


export default router;