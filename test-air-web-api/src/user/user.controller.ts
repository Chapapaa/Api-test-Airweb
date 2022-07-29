import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

//Contrôle le routing et la réponse de la page /user (vide)
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
}
