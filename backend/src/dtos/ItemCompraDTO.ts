import { IsString, IsNumber,  } from 'class-validator';
export class ItemCompraDTO {
  @IsString()
  productoId!: string;

  @IsNumber()
  cantidad!: number;

  @IsNumber()
  precioUnitario!: number;
}