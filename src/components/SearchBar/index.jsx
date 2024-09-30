import { HiOutlineSearch } from 'react-icons/hi';
import styles from './SearchBar.module.css'
import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext'
import fetchProducts from '../../../api/fetchProducts'

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    const { setProducts } = useContext(AppContext)

    const handleSearch = async (event) => {
        event.preventDefault();
        
        const products = await fetchProducts(searchValue);

        setProducts(products);
        setSearchValue('');
    }

    return ( 
        <>
            <form className={styles.search__bar} onSubmit={handleSearch}>
                
                <input type="search" 
                value={searchValue}
                placeholder='Buscar produtos'
                className={styles.search__input}
                onChange={ ({target}) => setSearchValue(target.value)}
                required
                />

                <button type='submit' className={styles.search__button}>
                    <HiOutlineSearch />
                </button>

            </form>
        </>
     );
}

export default SearchBar;