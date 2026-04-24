import {
  IsString,
  IsNumber,
  IsBoolean,
  IsUrl,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsUrl()
  @IsOptional()
  image_url: string;

  @IsUUID()
  category_id: string;

  @IsBoolean()
  is_available: boolean;

  @IsBoolean()
  is_active: boolean;
}
