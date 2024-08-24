import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateTypepokemonDto {
  @IsPositive()
  id: number;

  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;
}
