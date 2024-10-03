import { useContext } from 'react';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import './Carrinho.css'
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Carrinho() {

    const { cartItems, isCartVisible } = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item) => { return item.price + acc; }, 0);
    
    return ( 
        <section className={`cart ${isCartVisible ? 'cart--active' :''}`}>
            <div className="cart_items">
                {
                    cartItems.map((cartItem) => <CarrinhoItem key={cartItem.id} data={cartItem}/>)
                }
            </div>
            <div className="cart_resume">{formatCurrency(totalPrice, 'BRL')}</div> 
        </section>
     );
}

export default Carrinho;