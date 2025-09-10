import { db } from "../config/firebase.js";
import { LibroDTO } from "../dtos/LibroDTO.js";

export class LibroService {
  async crearLibro(data: LibroDTO): Promise<string> {
    const docRef = await db.collection("libros").add(data);
    return docRef.id;
  }

  async obtenerLibros(): Promise<(LibroDTO & { id: string })[]> {
    const snapshot = await db.collection("libros").get();
    return snapshot.docs.map(doc => ({
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
}
