import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

function Coin({ coin }) {
    return (
        <li className={styles.Coin}>
            <Link href='#'>
                <img
                    className={styles.Coin__iconImg}
                    src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                    alt={`${coin.symbol} img`}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                            'https://cryptologos.cc/logos/usd-coin-usdc-logo.png';
                    }}
                />
                {coin.name}(coin.symbol)
                <FaChevronRight />
            </Link>
        </li>
    );
}

export default Coin;
