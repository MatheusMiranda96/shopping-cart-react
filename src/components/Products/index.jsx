import styles from './Products.module.css'
import { useState, useEffect } from 'react';
import fetchProducts from '../../../api/fetchProducts';
import ProductCard from '../ProductCard';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
        })
    }, [])

    return ( 
        <>
        {products.length > 0 ? (
            <section className={styles.products}>
                {
                    products.map((product) => <ProductCard key={product.id} data={ product }/>)
                }
            </section>
        ) : (
            
            <div className={styles.carregando}>
                <span>Carregando produtos...</span>
            </div>
        )}
        </>
    );
}

export default Products;