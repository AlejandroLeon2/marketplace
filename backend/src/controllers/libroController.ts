import type { Request, Response } from "express";
import { validate } from "class-validator";
import { LibroDTO } from "../dtos/LibroDTO.js";
import { LibroService } from "../services/Productos.js";

const libroService = new LibroService();

export const crearLibro = async (req: Request, res: Response) => {
  const dto = new LibroDTO();

  dto.titulo = req.body.titulo;
  dto.descripcion = req.body.descripcion;
  dto.autor = req.body.autor;
  dto.editorial = req.body.editorial;
  dto.precio = req.body.precio;
  dto.imagen = req.body.imagen;
  dto.categoria = req.body.categoria;
  dto.idioma = req.body.idioma;
  dto.anio_publicacion = req.body.anio_publicacion;
  dto.fecha_subida = new Date();
  dto.vendedorId = req.body.vendedorId;
  dto.estado = req.body.estado;
  dto.formato = req.body.formato;

  const errores = await validate(dto);
  if (errores.length > 0) {
    return res.status(400).json(errores);
  }

  try {
    const libroPlano = { ...dto };
    const id = await libroService.crearLibro(libroPlano);
    res.status(201).json({ id });
  } catch (error) {
    console.error("Error interno:", error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error desconocido" });
    }
  }
};

export const obtenerLibros = async (_req: Request, res: Response) => {
  try {
    const libros = await libroService.obtenerLibros();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

export const obtenerLibroPorId = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID de libro no proporcionado" });
  }
  try {
    const libro = await libroService.obtenerLibroPorId(id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el libro" });
  }
};

export const actualizarLibro = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID de libro no proporcionado" });
  }
  try {
    await libroService.actualizarLibro(id, req.body);
    res.status(200).json({ mensaje: "Libro actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};

export const eliminarLibro = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID de libro no proporcionado" });
  }
  try {
    await libroService.eliminarLibro(id);
    res.status(200).json({ mensaje: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};

export const obtenerLibrosNuevos = async (_req: Request, res: Response) => {
  try {
    const libros = await libroService.obtenerLibrosNuevos();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros nuevos" });
  }
};

export const buscarLibros = async (req: Request, res: Response) => {
  const { texto } = req.query;

  if (!texto || typeof texto !== "string" || texto.length < 2) {
    return res.status(400).json({ error: "La búsqueda debe tener al menos 2 caracteres" });
  }

  try {
    const resultados = await libroService.buscarPorTexto(texto);
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error en búsqueda:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

