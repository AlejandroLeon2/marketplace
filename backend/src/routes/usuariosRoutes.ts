import { Router } from 'express';
import { registerUser, getUserProfile ,registerGoogleUser} from '../controllers/usuariosController.js';
import { verificarToken} from '../middlewares/usuarioauth.js';

const router = Router();

router.post('/register', registerUser);
router.get('/profile/:uid',  getUserProfile);
router.post("/registerGoogle",registerGoogleUser);

export default router;
