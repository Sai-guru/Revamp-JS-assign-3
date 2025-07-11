import {Router} from 'express';
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();
const router = Router();

router.get('/bacon',async(req,res)=> {
    try {
          const response = await axios.get(`${process.env.SOURCE_URL}/api/?type=all`);
          res.status(200).json({message : 'success man', data: response.data});
    }catch(err) {
        console.error(err);
        res.status(500).json({message: 'some error came'});
    }
})
export default router;