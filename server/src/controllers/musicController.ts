import express, {type Response, type Request} from 'express';



const receiveUserChoice = async (req: Request, res: Response) => {
    console.log(req.body);
     try{
     return res.status(201).json({success: true});
     } catch{
        return res.status(404).json({success:false});
     }
}


export default {receiveUserChoice};