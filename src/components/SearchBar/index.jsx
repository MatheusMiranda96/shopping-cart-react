import { HiOutlineSearch } from 'react-icons/hi';
import styles from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    return ( 
        <>
            <form className={styles.search__bar}>
                
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