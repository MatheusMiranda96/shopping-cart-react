import { useState } from 'react';
import styles from './Products.module.css'
import { useEffect } from 'react';
import fetchProducts from '../../../api/fetchProducts';
import ProductCard from '../ProductCard';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
        })
    }, [])

    console.log(products)

    return ( 
        <>
            <section className={styles.products}>
                <ProductCard />
            </section>
        </>
     );
}

export default Products;