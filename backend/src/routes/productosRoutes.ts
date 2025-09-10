import { Router } from "express";
import {
  crearLibro,
  obtenerLibros,
  obtenerLibroPorId,
  actualizarLibro,
  eliminarLibro,
} from "../controllers/libroController.js";
import { verificarToken } from "../middlewares/usuarioauth.js";

const router = Router();

router.post("/libros", crearLibro);

router.get("/libros", obtenerLibros);

router.get("/libros/:id", obtenerLibroPorId);

router.put("/libros/:id",  actualizarLibro);

router.delete("/libros/:id", eliminarLibro);

export default router;
