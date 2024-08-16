import CoinList from '@/components/CoinList';
import { Suspense } from 'react';
import styles from './index.module.css';
import Loading from '@/components/ui/Loading';

function Coins() {
    return (
        <div className={styles.Coins}>
            <Suspense fallback={<Loading />}>
                <CoinList />
            </Suspense>
        </div>
    );
}

export default Coins;
