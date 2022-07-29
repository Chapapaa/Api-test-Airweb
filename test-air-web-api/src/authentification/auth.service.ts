import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { createHash } from 'crypto';

//Gère la logique du module d'authentification
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {} //UserService est utilisé pour récupérer les users enregistrés en BDD

  // Récupère un utilisateur si il est enregistré, hash un mot de passe en fonction des entrées, vérifie que le hash correspond à celui enregistré
  // Renvoie true si les entrées sont valides, false sinon
  public async getAuthenticatedUser(
    email: string,
    password: string,
  ): Promise<boolean> {
    const foundUser = await this.userService.getByEmail(email); // Récupère l'utilisateur correspondant à l'email si il existe
    if (foundUser) {
      const hash = createHash('md5')
        .update(`${foundUser.id}${password}`) //Création du hash en md5 sous la forme <UserID><Password> ex : '5bonjour' (userID != userEmail)
        .digest('hex');
      if (foundUser.password_hash === hash) {
        return true;
      }
    }
    return false;
  }
}
