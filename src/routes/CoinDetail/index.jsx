import { useLocation } from 'react-router-dom';
import styles from './index.module.css';
import { useSuspenseQuery } from '@tanstack/react-query';

function CoinDetail() {
    const { state } = useLocation();
    const fetchCoinInfo = async () =>
        fetch(`https://api.coinpaprika.com/v1/coins/${state.id}`).then((res) =>
            res.json()
        );
    const { data: coinInfo } = useSuspenseQuery({
        queryKey: ['coinInfo', state.id],
        queryFn: fetchCoinInfo,
    });

    console.log(coinInfo);
    return (
        <div className={styles.CoinDetail}>
            <div className={styles.CoinDetail__title}>
                <img src={coinInfo?.logo} alt={`${state.name} logo`} />
                <h1>{state.name}</h1>
            </div>
            <p className={styles.CoinDetail__desc}>{coinInfo?.description}</p>
        </div>
    );
}

export default CoinDetail;
