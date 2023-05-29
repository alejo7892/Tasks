import {Router} from 'express';
import { catalogue } from '../controllers/catalogue.js';
import { showarticles } from '../controllers/catalogue.js';
const routerCatalogo = Router();

routerCatalogo.post("/catalogue", catalogue)
routerShowCatalogo.get("/getArticles", showarticles)

export default routerCatalogo;