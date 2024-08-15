import CoinList from '@/components/CoinList';
import { Suspense } from 'react';
import styles from './index.module.css';

function Coins() {
    return (
        <div className={styles.Coins}>
            <Suspense fallback={<div>Loading...</div>}>
                <CoinList />
            </Suspense>
        </div>
    );
}

export default Coins;
