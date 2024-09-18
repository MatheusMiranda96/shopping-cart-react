import { FaCartPlus } from 'react-icons/fa';
import styles from './ProductCard.module.css'

function ProductCard() {
    return ( 
        <>
            <section className={styles.product__card}>

                <img src="https://http2.mlstatic.com/D_916682-MLA47782359266_102021-WI.jpg" 
                alt="product" 
                className={styles.card__image} 
                />

                <div className={styles.card__infos}>
                    <h2 className={styles.card__price}>R$ 200</h2>
                    <h2 className={styles.card__tittle}>Manual do Dev</h2>
                </div>

                <button type='button' className={styles.button_add_cart}><FaCartPlus /></button>
                
            </section>
        </>
     );
}

export default ProductCard;