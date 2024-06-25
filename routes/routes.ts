import express from 'express'
import { getRoom, getPlayersScore } from './routecontroller';

const router = express.Router();

router.get("/room/:id", getRoom)
router.get("/room/:id/:player", getPlayersScore)



export default router;