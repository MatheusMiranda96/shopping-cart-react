import { BsCartDashFill } from 'react-icons/bs';
import styles from './CarrinhoItem.module.css'
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function CarrinhoItem({ data }) {

    const { cartItems, setCartItems } = useContext(AppContext)
    const {id, thumbnail, title, price} = data;

    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id != id);
        setCartItems(updateItems);
    };

    return ( 
        <section className={styles.cart_item}>
            <img 
              src={thumbnail}
              alt="imagem do item-carrinho" 
              className={styles.cart_item_image}
            />

            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>{ title }</h3>
                <h3 className={styles.cart_item_price}>{ formatCurrency(price, 'BRL') }</h3>
            
                <button 
                 type='button' 
                 className={styles.btn_remover_item}
                 onClick={handleRemoveItem}
                 >
                    <BsCartDashFill />
                </button>
            </div>


        </section>
     );
}

export default CarrinhoItem;