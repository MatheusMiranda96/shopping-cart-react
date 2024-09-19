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
            <section className={styles.products}>
                {
                    products.map((product) => <ProductCard key={product.id} data={ product }/>)
                }
            </section>
        </>
     );
}

export default Products;