import express from "express";

import checkoutRouter from "./routes/checkout.js"; // ajusta la ruta según tu estructura
import libroRoutes from "./routes/productosRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import ventasRoutes from "./routes/ventasRoutes.js";
import comprasRoutes from "./routes/comprasRoutes.js";

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/api/checkout", checkoutRouter); // monta el router de checkout


app.use("/api", comprasRoutes);

app.use("/api/ventas", ventasRoutes);

app.use("/api/productos", libroRoutes);
app.use("/api/users", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

