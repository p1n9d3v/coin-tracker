import CoinDetail from '@/components/CoinDetail';
import styles from './index.module.css';
import { Suspense } from 'react';
import CoinDetailSkeleton from '@/components/CoinDetail/skeleton';

function CoinDetailPage() {
    return (
        <div className={styles.CoinDetailPage}>
            <Suspense fallback={<CoinDetailSkeleton />}>
                <CoinDetail />
            </Suspense>
        </div>
    );
}

export default CoinDetailPage;
