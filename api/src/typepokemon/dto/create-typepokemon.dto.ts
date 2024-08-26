import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;
}
