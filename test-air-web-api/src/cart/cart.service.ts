import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { createHash } from 'crypto';
import { products } from 'src/product/product.entity';

// Garde en mémoire les paniers des utilisateurs
const userCarts = new Object(); // dictionnaire key : userID, value : products[]

// Contrôle la logique du module de cart
@Injectable()
export class CartService {
  constructor(private readonly userService: UserService) {}

  // En fonction du login et du mot de passe, vérifie que l'utilisateur est enregistré et renvoi le panier correspondant, return void sinon
  public async getCartContent(email: string, password: string) {
    const foundUser = await this.userService.getByEmail(email);
    if (foundUser) {
      const hash = createHash('md5')
        .update(`${foundUser.id}${password}`)
        .digest('hex');
      if (foundUser.password_hash === hash) {
        return userCarts[foundUser.id];
      }
    }
    return;
  }

  // Met à jour les informations du cart pour un utilisateur donné
  public setCartProducts(userID: number | void, productsInCart: products[]) {
    if (userID) {
      userCarts[userID] = productsInCart;
    }
  }
}
