import { IoCartOutline } from 'react-icons/io5';
import styles from './CartButton.module.css'

function CartButton() {
    return ( 
        <>
            <button type='button' className={styles.cart__button}>
                <IoCartOutline />
                <span className={styles.cart__status}>1</span>
            </button>
        </>
     );
}

export default CartButton;