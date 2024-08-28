import { IsNumber, IsString } from 'class-validator';

export class CreateRegisterDto {
  @IsNumber()
  winnerId: number;

  @IsString()
  winnerName: string;

  @IsNumber()
  loserId: number;

  @IsString()
  loserName: string;
}
