import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

function Coin({ coin }) {
    return (
        <li className={styles.Coin}>
            <Link href='#'>
                {coin.name}(coin.symbol)
                <FaChevronRight />
            </Link>
        </li>
    );
}

export default Coin;
