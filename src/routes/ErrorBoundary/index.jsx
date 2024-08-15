import styles from './index.module.css';
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
    const error = useRouteError();

    console.log(error.message);
    return (
        <div className={styles.ErrorBoundary}>
            <img
                className={styles.ErrorBoundary__img}
                src='/error.svg'
                alt='error img'
            />
            <div className={styles.ErrorBoundary__title}>
                Oops! Something went wrong.
            </div>
            <div className={styles.ErrorBoundary__mssage}>{error.message}</div>
        </div>
    );
}

export default ErrorBoundary;
