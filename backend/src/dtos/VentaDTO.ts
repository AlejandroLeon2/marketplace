import { IsString, IsNumber, IsOptional, IsDate } from "class-validator";
import type { Venta } from "../types/ventas.js";

export class VentaDTO implements Venta {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  productoId!: string;


  @IsNumber()
  precioUnitario!: number;

  @IsDate()
  fecha!: Date;

  
  @IsString()
  clienteId!: string;
}
