import { useSuspenseQuery } from '@tanstack/react-query';
import styles from './index.module.css';
import Coin from '@/components/ui/Coin';

function CoinList() {
    const fetchCoins = async () =>
        fetch('/coins.json').then((res) => res.json());

    const { data: coins } = useSuspenseQuery({
        queryKey: ['coins'],
        queryFn: fetchCoins,
    });

    return (
        <ul className={styles.CoinList}>
            {coins.map((coin, index) => (
                <Coin coin={coin} key={index} />
            ))}
        </ul>
    );
}

export default CoinList;
