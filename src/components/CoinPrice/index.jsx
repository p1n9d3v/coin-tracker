import styles from './index.module.css';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

function CoinPrice() {
    const { state } = useLocation();

    const fetchCoinInfo = async () =>
        fetch(`https://api.coinpaprika.com/v1/${state.id}/markets`).then(
            (res) => res.json()
        );
    const { data: coinMarket } = useSuspenseQuery({
        queryKey: ['coinInfo', state.id],
        queryFn: fetchCoinInfo,
    });

    console.log('coinmarket', coinMarket);
    return (
        <div className={styles.CoinPrice}>
            <div className={styles.CoinPrice__box}>
                <div className={styles.CoinPrice__title}>TotalAmount</div>
            </div>
            <div className={styles.CoinPrice__box}>
                <div className={styles.CoinPrice__title}>Price</div>
            </div>
        </div>
    );
}

export default CoinPrice;
