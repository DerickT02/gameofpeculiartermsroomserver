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