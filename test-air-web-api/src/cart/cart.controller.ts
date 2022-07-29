import { Controller, Get, Headers } from '@nestjs/common';
import { AuthService } from '../authentification/auth.service';
import { CartService } from './cart.service';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';

// Contrôle le routing et la réponse de la page /cart
@Controller()
export class CartController {
  constructor(
    private readonly authService: AuthService,
    private readonly cartService: CartService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  // Récupère le contenu du panier enregistré pour l'utilisateur
  // Nécessite les headers personnalisés suivants :
  // 'login' contenant l'email de l'utilisateur
  // 'password' contenant son mot de passe
  // Renvoit le contenu du panier si l'utilisateur est enregistré ou 'false' sinon
  @Get('/cart')
  async findAll(@Headers() headers: Record<string, string>) {
    // Vérifie si l'utilisateur est enregistré
    const authorized = await this.authService.getAuthenticatedUser(
      headers.login,
      headers.password,
    );
    if (authorized) {
      // Récupère le contenu du cart
      const result = await this.cartService.getCartContent(
        headers.login,
        headers.password,
      );
      return result;
    } else {
      return false;
    }
  }
  // Enregistre le contenu d'un cart pour un utilisateur
  // Nécessite les headers suivants :
  // 'login' contenant l'email de l'utilisateur
  // 'password' contenant le mot de passe de l'utilisateur
  // 'cart_content' contenant le contenu du cart au format json : {"cart_content" : [(int)product_id, ...]} ex : {"cart_content" : [1,8,4]}
  // Renvoie true si l'opération est un succès, false sinon
  @Get('/setCart')
  async setCartProducts(@Headers() headers: Record<string, string>) {
    // Vérifie si l'utilisateur est enregistré
    const authorized = await this.authService.getAuthenticatedUser(
      headers.login,
      headers.password,
    );
    if (authorized) {
      // récupère les informations de l'utilisateur
      const currentUser = await this.userService.getByEmail(headers.login);
      // récupère l'ensemble des produits enregistrés
      const allProducts = await this.productService.findAll();
      // filtre les produits qui correspondent à la requête de l'utilisateur
      const cleanProducts = await allProducts.filter((product) => {
        try {
          const cartItems = JSON.parse(headers.cart_content);
          return cartItems.cart_items.includes(product.id);
        } catch {
          return false;
        }
      });
      if (currentUser) {
        //si les données sont valides, met à jour les donnée du cart
        this.cartService.setCartProducts(currentUser.id, cleanProducts);
        return true;
      }
    }
    return false;
  }
}
