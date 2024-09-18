import CartButton from '../CartButton'
import SearchBar from '../SearchBar'
import styles from './Header.module.css'

function Header() {
    
    return(
        <>
        <div className={styles.header}>
            <div className={styles.container}>
                <SearchBar />
                <CartButton />
            </div>
        </div>
        </>
    )
}

export default Header