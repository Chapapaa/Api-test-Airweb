import { Controller, Get, Headers } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthService } from 'src/authentification/auth.service';

// Contrôle le routing et la réponse de la page /product
@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly authService: AuthService,
  ) {}
  // Récupère et renvoi tous les produits disponibles de la page /product
  // Nécessite les headers suivants:
  // 'login' contenant l'email de l'utilisateur
  // 'password' contenant le mot de passe de l'utilisateur
  @Get('/products')
  async findAll(@Headers() headers: Record<string, string>) {
    // regarde si l'utilisateur est enregistré
    const authorized = await this.authService.getAuthenticatedUser(
      headers.login,
      headers.password,
    );
    // récupère l'ensemble des produits
    const productsList = await this.productService.findAll();
    // filtre les produits en fonction des droits de visibilité de l'utilisateur
    let cleanList;
    if (authorized) {
      cleanList = productsList;
    } else {
      cleanList = productsList.filter(
        (element) => element.visible_public === 1,
      );
    }
    // Renvoi la liste des produits valides au format JSON
    return `{ "products" : ${JSON.stringify(cleanList)}}`;
  }
}
