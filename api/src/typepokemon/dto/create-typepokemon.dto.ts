import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypepokemonDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;
}
