import styles from './index.module.css';
import { useLocation } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import SocialButton from '@/components/ui/SocialButton';

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

            <div className={styles.CoinDetail__links}>
                {Object.entries(coinInfo.links)?.map(([type, links]) => (
                    <SocialButton key={type} type={type} href={links.at(0)} />
                ))}
            </div>
        </div>
    );
}

export default CoinDetail;
