import { Router } from "express";
import { crearCompra,   getComprasPorCliente,getComprasFecha } from "../controllers/compraController.js";

const router = Router();
router.get("/compras/:clienteId", getComprasPorCliente);
router.get("/compras/fecha/:clienteId", getComprasFecha);
router.post("/compras", crearCompra);

export default router;
