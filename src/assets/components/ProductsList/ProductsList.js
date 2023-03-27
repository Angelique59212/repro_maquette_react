import './ProductsList.css';
import logo from '../../image/image1.png';

export const ProductsList = () => {
    const products = [
        {id:1, name: 'Produit1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus ' +
                'quis nunc at feugiat. Nulla ut malesuada lectus. Fusce feugiat lacinia faucibus. Quisque faucibus mattis' +
                ' tortor vel imperdiet. Proin sed ante ut ipsum dictum auctor eget non orci. Cras sagittis lacus id erat' +
                ' cursus congue. Praesent nibh ligula, mollis in nisi in, venenatis tempor neque. Curabitur maximus sollicitudin viverra. '}
    ];
    return(
        <div className='ProductsList'>
            <ul className='products-list'>
                <div className='Product'>
                    <img className='image-product' src={logo} alt="product1"/>
                    {products.map(product =>
                        <li key={product.id} className='product'>
                            <h1 className='name'>{product.name}</h1><span className='product-lorem'>{product.description}</span>
                        </li>
                    )}
                </div>

            </ul>
        </div>

    )
}