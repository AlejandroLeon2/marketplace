import { Router } from "express";
import { crearVenta, obtenerVentasCliente } from "../controllers/ventaController.js";

const router = Router();

router.post("/ventas", crearVenta);
router.get("/ventas/:clienteId", obtenerVentasCliente);


export default router;
