import styles from './index.module.css';
import { useLocation } from 'react-router-dom';
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

    return (
        <div>
            <div className={styles.CoinDetail__title}>
                <img
                    className={styles.CoinDetail__logoImg}
                    src={coinInfo?.logo}
                    alt={`${state.name} logo`}
                />
                <h1 className={styles.CoinDetail__name}>{state.name}</h1>
            </div>
            <p className={styles.CoinDetail__desc}>{coinInfo?.description}</p>
        </div>
    );
}

export default CoinDetail;
