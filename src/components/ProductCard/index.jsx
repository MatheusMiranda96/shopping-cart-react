import { FaCartPlus } from 'react-icons/fa';
import styles from './ProductCard.module.css'
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {

    const {title, thumbnail, price} = data;

    return ( 
        <>
            <section className={styles.product__card}>

                <img src={ thumbnail.replace(/\w\.jpg/gi, "W.jpg") } 
                alt="product" 
                className={styles.card__image} 
                />

                <div className={styles.card__infos}>
                    <h2 className={styles.card__price}>{ formatCurrency(price, 'BRL') }</h2>
                    <h2 className={styles.card__tittle}>{ title }</h2>
                </div>

                <button type='button' className={styles.button_add_cart}><FaCartPlus /></button>
                
            </section>
        </>
     );
}

export default ProductCard;
