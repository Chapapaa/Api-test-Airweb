import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { users } from './user.entity';

// Contrôle les imports et exports du module user
@Module({
  imports: [TypeOrmModule.forFeature([users])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
