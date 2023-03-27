import './App.css';

import {Header} from "../Header/Header";
import {CartItem} from "../Cartitem/CartItem";
import {ProductsList} from "../ProductsList/ProductsList";
import {Categories} from "../Categories/Categories";

function App() {
  return (
      <>
        <Header/>
          <div className='container'>
              <div className='container-cart'>
                  <CartItem/>
              </div>
              <div className='container-productList'>
                  <div>
                      <Categories/>
                  </div>
                  <ProductsList/>
              </div>
          </div>
      </>
  );
}

export default App;
