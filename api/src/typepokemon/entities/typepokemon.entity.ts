import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.type)
  pokemons: Pokemon[];
}
