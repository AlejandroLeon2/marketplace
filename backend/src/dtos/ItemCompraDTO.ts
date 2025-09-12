import { IsString, IsNumber,  } from 'class-validator';
import type { ItemCompra } from '../types/items.js';
export class ItemCompraDTO implements ItemCompra{
  @IsString()
  productoId!: string;

  @IsNumber()
  precioUnitario!: number;
}