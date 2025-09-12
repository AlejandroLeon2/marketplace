import { db } from "../config/firebase.js";
import { LibroDTO } from "../dtos/LibroDTO.js";
import { stripe } from "../config/stripe.js";

export class LibroService {
  async buscarPorTexto(
    texto: string
  ): Promise<{ id: string; titulo: string; imagen: string }[]> {
    if (texto.length < 2) return [];

    const snapshot = await db
      .collection("libros")
      .orderBy("titulo")
      .startAt(texto)
      .endAt(texto + "\uf8ff")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      titulo: doc.data().titulo,
      imagen: doc.data().imagen,
    }));
  }

  async crearLibro(data: LibroDTO): Promise<string> {

    const product = await stripe.products.create({
      name: data.titulo,
      description: data.descripcion,
      images: [typeof data.imagen === "string" ? data.imagen : ""],
      default_price_data: {
        currency: "pen",
        unit_amount: data.precio! * 100,
      },
    });
    console.log(product);
    const docRef = await db.collection("libros").add({idprice:product.default_price,...data});
    return docRef.id;
  }

  async obtenerLibros(): Promise<(LibroDTO & { id: string })[]> {
    const snapshot = await db.collection("libros").get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as LibroDTO),
    }));
  }

  async obtenerLibroPorId(id: string): Promise<LibroDTO | null> {
    const doc = await db.collection("libros").doc(id).get();
    return doc.exists ? (doc.data() as LibroDTO) : null;
  }

  async actualizarLibro(id: string, data: Partial<LibroDTO>): Promise<void> {
    await db.collection("libros").doc(id).update(data);
  }

  async eliminarLibro(id: string): Promise<void> {
    await db.collection("libros").doc(id).delete();
  }

  async obtenerLibrosNuevos(): Promise<(LibroDTO & { id: string })[]> {
    try {
      const snapshot = await db
        .collection("libros")
        .where("estado", "==", "activo")
        .orderBy("fecha_subida", "desc")
        .limit(10)
        .get();

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as LibroDTO),
      }));
    } catch (error) {
      console.error("Firestore error:", error);
      throw new Error("Error al obtener libros nuevos");
    }
  }

  async obtenerLibrosNovela(): Promise<(LibroDTO & { id: string })[]> {
    try {
      const snapshot = await db
        .collection("libros")
        .where("estado", "==", "activo")
        .where("categoria", "==", "novela")
        .orderBy("fecha_subida", "desc")
        .limit(10)
        .get();

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as LibroDTO),
      }));
    } catch (error) {
      console.error("Firestore error:", error);
      throw new Error("Error al obtener libros nuevos");
    }
  }
}
