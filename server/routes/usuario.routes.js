import {Router} from 'express';
import { registro } from '../controllers/usuario.controllers.js';
import { login } from '../controllers/usuario.controllers.js';

const routerUser=Router();

routerUser.post("/registroUsuario",registro);
routerUser.post("/loginUsuario",login)


export default routerUser;