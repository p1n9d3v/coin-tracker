import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import React from 'react';
import Loading from '@/components/ui/Loading';

function Root() {
    return (
        <div className={styles.Root}>
            <Outlet />
        </div>
    );
}

export default Root;
