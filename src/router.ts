import {Router} from "express";
import {getPlayer, getPlayerById, insertPlayer, deletePlayerById} from "./controllers/players-controller";

const router = Router();

router.get('/players', getPlayer);
router.get('/players/:id', getPlayerById);
router.post('/players', insertPlayer);
router.delete('/players/:id', deletePlayerById);

export default router;