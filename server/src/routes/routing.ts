import express, {type Request, type Response} from 'express';
import musicController from '../controllers/musicController.js'


const router: express.Router = express.Router();

router.post('/hello', (req: Request, res: Response) => {
     console.log("hello");
     
    
     return res.status(201).json({success:true});
});

router.post('/test', musicController.receiveUserChoice)


export default router;