import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { products } from './product.entity';

// Côntrole la logique du module product
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(products)
    private productsRepository: Repository<products>,
  ) {}
  // Récupère et renvoi tous les produits de la BDD
  async findAll(): Promise<products[]> {
    return await this.productsRepository.find();
  }
}
