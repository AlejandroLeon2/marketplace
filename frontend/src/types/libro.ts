export interface Libro {
  titulo: string;
  descripcion: string;
  precio: number;
  autor?: string;
  anio_publicacion?: number;
  fecha_subida?: string;
  categoria?: string;
  idioma?: string;
  imagen: string;
};