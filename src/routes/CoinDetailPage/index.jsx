import CoinDetail from '@/components/CoinDetail';
import styles from './index.module.css';
import { Suspense } from 'react';
import CoinDetailSkeleton from '@/components/CoinDetail/skeleton';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

function CoinDetailPage() {
    const { state } = useLocation();
    const fetchCoinTicker = async () =>
        fetch(`https://api.coinpaprika.com/v1/tickers/${state.id}`).then(
            (res) => res.json()
        );

    const { data: coinTicker } = useSuspenseQuery({
        queryKey: ['coinTicker', state.id],
        queryFn: fetchCoinTicker,
    });

    return (
        <div className={styles.CoinDetailPage}>
            <Suspense fallback={<CoinDetailSkeleton />}>
                <CoinDetail />
            </Suspense>
        </div>
    );
}

export default CoinDetailPage;
