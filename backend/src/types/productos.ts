type Categoria =
  | "novela"
  | "cuento"
  | "poesía"
  | "ensayo"
  | "biografía"
  | "autoayuda"
  | "infantil"
  | "juvenil"
  | "fantasía"
  | "ciencia ficción"
  | "historia"
  | "religión"
  | "educativo"
  | "arte"
  | "cómic"
  | "manga";

export interface Libro {
  id?: string;
  titulo: string;
  descripcion: string;
  autor?: string;
  editorial?: string;
  precio?: number;
  imagen?: string|string[]|undefined;
  categoria?:Categoria;
  idioma?: string;
  anio_publicacion?: string;
  fecha_subida: Date;
  vendedorId?: string;
  estado?: "activo" | "pausado" | "agotado";
  formato?: "fisico" | "digital";
}
