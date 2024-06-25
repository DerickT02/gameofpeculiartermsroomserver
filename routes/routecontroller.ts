import { RoomModel } from "../models";

export const getRoom = async (req: any, res: any) => {
    const gameID = req.params.id
    try{
        const gameData = await RoomModel.findOne({gameId: gameID})
        res.json(gameData)
    }
   catch(err){
    res.send(err)
    console.log(err)
   }
}

export const getPlayersScore = async (req: any, res: any) => {
    const gameID = req.params.id;
    try{
        const gameData = await RoomModel.findOne({gameId: gameID})
        const playerScore = gameData?.scores.get(req.params.player)
        res.send({playerScore: playerScore})
    }
    catch(err){
        res.send(err)
    }
}