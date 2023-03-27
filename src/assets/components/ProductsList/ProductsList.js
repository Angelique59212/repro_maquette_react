import './ProductsList.css';
import '../Product/Product';
import logo from '../../image/image1.png';
import logo2 from '../../image/image2.png';
import logo3 from '../../image/image3.png';
import logo4 from '../../image/image4.png';
import logo5 from '../../image/image5.png';

import {Product} from "../Product/Product";

export const ProductsList = () => {
    const products = [
        {product: new Product(1, 'Produit 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque rhoncus quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. ' +
                'Quisque faucibus mattis tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. ' +
                'Cras sagittis lacus id erat cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. ' +
                'Curabitur maximus sollicitudin viverra. ', 230 , logo),
        },
        {product: new Product(2, 'Produit 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque rhoncus quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. ' +
                'Quisque faucibus mattis tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. ' +
                'Cras sagittis lacus id erat cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. ' +
                'Curabitur maximus sollicitudin viverra. ', 230 , logo2),
        },
        {product: new Product(3, 'Produit 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque rhoncus quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. ' +
                'Quisque faucibus mattis tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. ' +
                'Cras sagittis lacus id erat cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. ' +
                'Curabitur maximus sollicitudin viverra. ', 230 , logo3),
        },
        {product: new Product(4, 'Produit 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque rhoncus quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. ' +
                'Quisque faucibus mattis tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. ' +
                'Cras sagittis lacus id erat cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. ' +
                'Curabitur maximus sollicitudin viverra. ', 230 , logo4),
        },
        {product: new Product(5, 'Produit 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque rhoncus quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. ' +
                'Quisque faucibus mattis tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. ' +
                'Cras sagittis lacus id erat cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. ' +
                'Curabitur maximus sollicitudin viverra. ', 230 , logo5),
        },
    ];
    return(
        <div className='ProductsList'>
            <ul className='products-list'>
                <div className='Product'>
                    {products.map(product =>
                        <li key={product.product.id} className='product'>
                            <img className='image-product' src={product.product.image} alt=""/>
                            <div>
                                <h1 className='name'>{product.product.name}</h1><span className='product-lorem'>{product.product.description}</span>
                              <div className='price'>
                                  <div className='choice'>
                                      <div className='less'>-</div>
                                      <span>10</span>
                                      <div className='more'>+</div>
                                  </div>
                                  <p>$ {product.product.price}</p>
                              </div>
                            </div>
                        </li>
                    )}
                </div>

            </ul>
        </div>

    )
}