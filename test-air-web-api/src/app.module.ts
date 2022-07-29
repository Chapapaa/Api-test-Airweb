import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { users } from './user/user.entity';
import { ProductModule } from './product/product.module';
import { products } from './product/product.entity';
import { AuthModule } from './authentification/auth.module';
import { CartModule } from './cart/cart.module';
@Module({
  imports: [
    AppModule,
    UserModule,
    ProductModule,
    AuthModule,
    CartModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/DATABASE.sqlite',
      entities: [users, products],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
