import {Router} from 'express';
import { catalogue } from '../controllers/catalogue';
const router = Router();
router.post("/catalogue", catalogue)