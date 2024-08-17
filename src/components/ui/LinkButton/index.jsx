import { FaFacebook, FaInternetExplorer } from 'react-icons/fa';
import { GoFileCode } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { SiOpensearch } from 'react-icons/si';
import { FaReddit } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaMedium } from 'react-icons/fa';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function LinkButton({ type = '', href = '' }) {
    return (
        <div className={styles.LinkButton}>
            <Link to={href} target='_blank'>
                {type === 'explorer' && (
                    <SiOpensearch
                        style={{ fill: 'var(--colors-emerald-300)' }}
                    />
                )}
                {type === 'facebook' && (
                    <FaFacebook style={{ fill: 'var(--colors-blue-600)' }} />
                )}
                {type === 'website' && (
                    <FaInternetExplorer
                        style={{ fill: 'var(--colors-blue-500)' }}
                    />
                )}
                {type === 'source_code' && (
                    <GoFileCode style={{ fill: 'var(--colors-indigo-300)' }} />
                )}
                {type === 'whitepaper' && (
                    <IoDocumentTextOutline
                        style={{ fill: 'var(--colors-coolGray-500)' }}
                    />
                )}
                {type === 'reddit' && (
                    <FaReddit style={{ fill: 'var(--colors-red-500)' }} />
                )}
                {type === 'youtube' && (
                    <FaYoutube style={{ fill: 'var(--colors-red-700)' }} />
                )}
                {type === 'twitter' && (
                    <FaSquareXTwitter
                        style={{ fill: 'var(--colors-coolGray-800)' }}
                    />
                )}
                {type === 'medium' && (
                    <FaMedium style={{ fill: 'var(--colors-coolGray-400)' }} />
                )}
            </Link>
        </div>
    );
}

export default LinkButton;
