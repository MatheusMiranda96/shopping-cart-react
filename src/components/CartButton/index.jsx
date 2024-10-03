import { IoCartOutline } from 'react-icons/io5';
import styles from './CartButton.module.css'
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible  } = useContext(AppContext)

    return ( 
        <>
            <button 
             type='button' 
             className={styles.cart__button}
             onClick={ () => setIsCartVisible(!isCartVisible)}
             >
                <IoCartOutline />
                {
                    cartItems.length > 0 && <span className={styles.cart__status}>{cartItems.length}</span>
                }
            </button>
        </>
     );
}

export default CartButton;