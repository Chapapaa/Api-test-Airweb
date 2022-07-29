import { Controller, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

// contrôle le routing et l'envoi de réponses de la page /login
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // /login doit posséder les deux headers personnalisés suivants :
  // "login" contenant l'email de l'utilisateur
  // "password" contenant le mot de passe de l'utilisateur
  // renvoie 'true' si l'authentification a réussie, 'false' sinon
  @Get('/login')
  async findAll(@Headers() headers: Record<string, string>) {
    const authorized = await this.authService.getAuthenticatedUser(
      headers.login,
      headers.password,
    );
    if (authorized) {
      return true;
    } else {
      return false;
    }
  }
}
