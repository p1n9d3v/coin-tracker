import styles from './index.module.css';
import Skeleton from 'react-loading-skeleton';

function CoinDetailSkeleton() {
    return (
        <div>
            <di
                className={styles.CoinDetail__title}
                style={{ marginBottom: '1rem' }}
            >
                <Skeleton circle width='5rem' style={{ aspectRatio: 1 }} />
                <Skeleton width={150} height={30} />
            </di>

            <Skeleton count={3} style={{ margin: '.2rem' }} />
        </div>
    );
}

export default CoinDetailSkeleton;
