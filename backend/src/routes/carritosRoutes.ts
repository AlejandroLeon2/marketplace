import { Router } from 'express';
import { carritoController } from '../controllers/carritoController.js';

const router = Router();

router.post('/carrito', carritoController.guardarCarrito);
router.get('/carrito/:clienteId', carritoController.obtenerCarrito);

export default router;
