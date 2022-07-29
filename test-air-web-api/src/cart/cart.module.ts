import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/user/user.entity';
import { AuthModule } from 'src/authentification/auth.module';
import { ProductModule } from 'src/product/product.module';

// Contrôl les imports et exports du module cart
@Module({
  imports: [
    TypeOrmModule.forFeature([users]),
    UserModule,
    AuthModule,
    UserModule,
    ProductModule,
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
