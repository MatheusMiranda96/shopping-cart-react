import styles from './Loading.module.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
    return ( 
        <>   
            <AiOutlineLoading3Quarters className={styles.loading} />
            <p className={styles.teste}>Carregando produtos...</p>
        </>
     );
}

export default Loading;