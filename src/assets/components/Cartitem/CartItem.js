import './CartItem.css';
import '../Cart/Cart';
import logo from '../../image/trash.svg';

import {Cart} from "../Cart/Cart";

export const CartItem = () => {
    const carts = [
        {cart: new Cart(1, logo, 'Produit 1', '(2)' )},
        {cart: new Cart(2, logo, 'Produit 4', '(4)')},
        {cart: new Cart(3, logo, 'Produit 3', '(4)')},
    ];
    return(
        <div className='ItemsList'>
            <h1>Vos articles</h1>
            <ul className='item-list'>
                <div className='CartItem'>
                    {carts.map(cart =>
                        <li key={cart.cart.id} className='cart'>
                            <div>
                                <img className='image-cart' src={cart.cart.image} alt=""/>
                                <span>{cart.cart.name}</span>
                                <span className='quantity'>{cart.cart.quantity}</span>
                            </div>
                        </li>
                    )}
                </div>
            </ul>
            <div className='delete'>
                <button>Vider le panier</button>
            </div>

        </div>
    )
}