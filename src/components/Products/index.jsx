import styles from './Products.module.css'
import { useState, useEffect, useContext } from 'react';
import fetchProducts from '../../../api/fetchProducts';
import ProductCard from '../ProductCard';
import Loading from '../Loading';
import AppContext from '../../context/AppContext';

function Products() {

    const {products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (     
        ( loading && <Loading /> ) || ( 
            <section className={styles.products}>
                {
                    products.map((product) => <ProductCard key={product.id} data={ product }/>)
                }
            </section>
         )
                 
    );
}

export default Products;