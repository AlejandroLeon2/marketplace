import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { ItemCompraDTO } from './ItemCompraDTO.js';
import type { ICarrito } from '../types/carritos.js';

export class CarritoDTO implements ICarrito {
  @IsString()
  clienteId!: string;

  @IsArray()
  @ValidateNested({ each: true })
  items!: ItemCompraDTO[];
}
