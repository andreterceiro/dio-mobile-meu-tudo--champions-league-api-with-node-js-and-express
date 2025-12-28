import {Router} from "express";
import {getPlayer, getPlayerById, insertPlayer, deletePlayerById, updatePlayerById} from "./controllers/players-controller";
import {getClubs} from "./controllers/clubs-controller";

const router = Router();

router.get('/players', getPlayer);
router.get('/players/:id', getPlayerById);
router.post('/players', insertPlayer);
router.delete('/players/:id', deletePlayerById);
router.put('/players/:id', updatePlayerById);

router.get('/clubs', getClubs);

export default router;