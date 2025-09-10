import type { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.body.vendedorId = decodedToken.uid;
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido o expirado" });
  }
};
