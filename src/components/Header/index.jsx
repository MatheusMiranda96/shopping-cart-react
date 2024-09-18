import SearchBar from '../SearchBar'
import styles from './Header.module.css'

function Header() {
    
    return(
        <>
        <div className={styles.header}>
            <div className={styles.container}>
                <SearchBar />
                <button>Cart</button>
            </div>
        </div>
        </>
    )
}

export default Header