import { Router } from 'express';
import { registerUser, getUserProfile } from '../controllers/usuariosController.js';
import { verificarToken} from '../middlewares/usuarioauth.js';

const router = Router();

router.post('/register', registerUser);
router.get('/profile/:uid',  getUserProfile);

export default router;
