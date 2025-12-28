import {Router} from "express";
import {getPlayers, getPlayerById, insertPlayer, deletePlayerById, updatePlayerById} from "./controllers/players-controller";
import {getClubs} from "./controllers/clubs-controller";

const router = Router();

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);
router.post('/players', insertPlayer);
router.delete('/players/:id', deletePlayerById);
router.put('/players/:id', updatePlayerById);

router.get('/clubs', getClubs);

export default router;