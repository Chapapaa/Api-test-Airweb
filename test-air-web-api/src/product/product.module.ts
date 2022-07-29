import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { products } from './product.entity';
import { AuthModule } from 'src/authentification/auth.module';

// Contrôle les imports et exports du module product
@Module({
  imports: [TypeOrmModule.forFeature([products]), AuthModule],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
