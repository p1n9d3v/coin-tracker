import CoinDetail from '@/components/CoinDetail';
import CoinDetailSkeleton from '@/components/CoinDetail/skeleton';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './index.module.css';

function CoinDetailPage() {
    const { state } = useLocation();
    // const fetchCoinTicker = async () =>
    //     fetch(`https://api.coinpaprika.com/v1/tickers/${state.id}`).then(
    //         (res) => res.json()
    //     );
    //
    // const { data: coinTicker } = useSuspenseQuery({
    //     queryKey: ['coinTicker', state.id],
    //     queryFn: fetchCoinTicker,
    // });

    return (
        <div className={styles.CoinDetailPage}>
            <Suspense fallback={<CoinDetailSkeleton />}>
                <CoinDetail />
                <Outlet />

                <div>
                    <Link to='.' state={state} unstable_viewTransition>
                        price
                    </Link>
                    <Link to='chart' state={state} unstable_viewTransition>
                        chart
                    </Link>
                </div>
            </Suspense>
        </div>
    );
}

export default CoinDetailPage;
