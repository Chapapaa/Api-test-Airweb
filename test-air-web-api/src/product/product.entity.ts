import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  label: string;

  @Column('text')
  description: string;

  @Column('integer')
  price: number;

  @Column('integer')
  category_id: number;

  @Column('text')
  thumbnail_url: string;

  @Column('integer')
  visible_public: number;

  @Column('integer')
  visible_authenticated: number;
}
