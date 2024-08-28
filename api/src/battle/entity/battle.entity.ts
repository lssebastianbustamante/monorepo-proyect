import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winnerId: number;

  @Column()
  winnerName: string;

  @Column()
  loserId: number;

  @Column()
  loserName: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
}
