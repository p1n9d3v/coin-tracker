import styles from './index.module.css';
import { useParams } from 'react-router-dom';

function CoinDetail() {
    const { coinId } = useParams();
    return <div>CoinDetail</div>;
}

export default CoinDetail;
