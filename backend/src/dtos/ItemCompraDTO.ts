import { IsString, IsNumber,  } from 'class-validator';
export class ItemCompraDTO {
  @IsString()
  productoId!: string;

  @IsNumber()
  precioUnitario!: number;
}