import {
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { ItemCompraDTO } from "./ItemCompraDTO.js";

export class CompraDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  clienteId!: string;

  @IsDate()
  fecha!: Date;

  @IsArray()
  @ValidateNested({ each: true })
  items!: ItemCompraDTO[];

  @IsNumber()
  total!: number;
}
