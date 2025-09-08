export interface Libro {
  id?: string; 
  titulo: string;
  descripcion: string;
  autor?: string;
  editorial?: string;
  precio: number;
  imagen: string; 
  categoria?: string; 
  idioma?: string; 
  anio_publicacion?: number;
  fecha_subida: Date;
  vendedorId: string; 
  estado: 'activo' | 'pausado' | 'agotado'; 
  formato?: 'físico' | 'digital'; 
};
