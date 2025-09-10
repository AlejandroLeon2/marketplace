import express from "express";

import libroRoutes from "./routes/productosRoutes.js"
import usuariosRoutes from "./routes/usuariosRoutes.js"

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/productos", libroRoutes);
app.use("/api/users", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
