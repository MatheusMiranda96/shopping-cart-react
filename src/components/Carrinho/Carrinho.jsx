import { useContext } from 'react';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import styles from './Carrinho.module.css'
import AppContext from '../../context/AppContext';

function Carrinho() {

    const { cartItems } = useContext(AppContext)
    
    return ( 
        <section className={styles.cart}>
            <div className={styles.cart_items}>
                {
                    cartItems.map((cartItem) => <CarrinhoItem key={cartItem.id} data={cartItem}/>)
                }
            </div>
            <div className={styles.cart_resume}>Resumo do Carrinho</div>
        </section>
     );
}

export default Carrinho;