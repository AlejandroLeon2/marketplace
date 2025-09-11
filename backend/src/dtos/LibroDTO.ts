import type { Libro } from "../types/productos.ts";
import {
  IsString,
  IsNumber,
  IsOptional,
  IsIn,
  IsDate,
  IsUrl,
} from "class-validator";

export class LibroDTO implements Libro {
  @IsString()
  titulo!: string;

  @IsString()
  descripcion!: string;

  @IsOptional()
  @IsString()
  autor?: string;

  @IsOptional()
  @IsString()
  editorial?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsUrl()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsIn([
    "novela",
    "cuento",
    "poesía",
    "ensayo",
    "biografía",
    "autoayuda",
    "infantil",
    "juvenil",
    "fantasía",
    "ciencia ficción",
    "historia",
    "religión",
    "educativo",
    "arte",
    "cómic",
    "manga",
  ])
  categoria?:
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

  @IsOptional()
  @IsString()
  idioma?: string;

  @IsOptional()
  @IsString()
  anio_publicacion?: string;

  @IsDate()
  fecha_subida!: Date;
  @IsOptional()
  @IsString()
  vendedorId?: string;

  @IsOptional()
  @IsIn(["activo", "pausado", "agotado"])
  estado?: "activo" | "pausado" | "agotado";

  @IsOptional()
  @IsIn(["fisico", "digital"])
  formato?: "fisico" | "digital";
}
