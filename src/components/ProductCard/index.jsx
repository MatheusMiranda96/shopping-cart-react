import { FaCartPlus } from 'react-icons/fa';
import styles from './ProductCard.module.css'
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

    const {title, thumbnail, price} = data;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => {
        setCartItems([ ...cartItems, data ]);
    }

    return ( 
        <>
            <section className={styles.product__card}>

                <img src={ thumbnail.replace(/\w\.jpg/gi, "W.jpg") } /* replace para alterar qualidade da imagem de I para W */
                alt="product" 
                className={styles.card__image} 
                />

                <div className={styles.card__infos}>
                    <h2 className={styles.card__price}>{ formatCurrency(price, 'BRL') }</h2>
                    <h2 className={styles.card__tittle}>{ title }</h2>
                </div>

                <button 
                type='button' 
                className={styles.button_add_cart}
                onClick={ handleAddCart }
                >
                <FaCartPlus />
                </button>
                
            </section>
        </>
     );
}

export default ProductCard;
