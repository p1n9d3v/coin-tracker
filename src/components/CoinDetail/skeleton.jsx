import styles from './index.module.css';
import Skeleton from 'react-loading-skeleton';

function CoinDetailSkeleton() {
    return (
        <div>
            <div
                className={styles.CoinDetail__title}
                style={{ marginBottom: '1rem' }}
            >
                <Skeleton circle width='5rem' style={{ aspectRatio: 1 }} />
                <Skeleton width={150} height={30} />
            </div>

            <Skeleton count={3} style={{ margin: '.2rem' }} />

            <Skeleton className={styles.CoinDetail__links} height={30} />
        </div>
    );
}

export default CoinDetailSkeleton;
