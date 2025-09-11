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
type estado = "activo" | "pausado" | "agotado";
type formato = "físico" | "digital";

export interface Libro {
  id?: string;
  titulo: string;
  descripcion: string;
  autor?: string;
  editorial?: string;
  precio?: number;
  imagen?: string;
  categoria?: Categoria | string;
  idioma?: string;
  anio_publicacion?: string;
  fecha_subida?: Date | string;
  vendedorId?: string;
  estado?: estado | string;
  formato?: formato | string;
}
