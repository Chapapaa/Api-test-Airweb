import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

// Contrôle la logique du module user
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private usersRepository: Repository<users>,
  ) {}
  // renvoi tous les utilisateurs
  async findAll(): Promise<users[]> {
    return await this.usersRepository.find();
  }
  // renvoi un utilisateur en fonction de son nom
  async findOne(username: string): Promise<users | void> {
    const userList = await this.usersRepository.find();
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].name === username) {
        return userList[i];
      }
    }
  }
  // renvoi un utilisateur correspondant à l'email
  async getByEmail(email: string): Promise<users | void> {
    const userList = await this.usersRepository.find();
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].email === email) {
        return userList[i];
      }
    }
  }
  // renvoi un utilisateur correxpondant à l'id
  async getByID(id: number): Promise<users | void> {
    const userList = await this.usersRepository.find();
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === id) {
        return userList[i];
      }
    }
  }
}
