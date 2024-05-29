import express from 'express'
import { getRoom } from './routecontroller';

const router = express.Router();

router.get("/room/:id", getRoom)



export default router;