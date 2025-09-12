import { Router } from "express";
import {
  crearLibro,
  obtenerLibros,
  obtenerLibroPorId,
  actualizarLibro,
  eliminarLibro,
  obtenerLibrosNuevos,
  buscarLibros
} from "../controllers/libroController.js";
import { verificarToken } from "../middlewares/usuarioauth.js";

const router = Router();

router.post("/libros", crearLibro);
router.get("/libros/busqueda",buscarLibros);
router.get("/librosnew",obtenerLibrosNuevos);

router.get("/libros", obtenerLibros);

router.get("/libros/:id", obtenerLibroPorId);

router.put("/libros/:id",  actualizarLibro);

router.delete("/libros/:id", eliminarLibro);


export default router;
