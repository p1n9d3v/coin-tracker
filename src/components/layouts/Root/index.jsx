import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import React from 'react';

function Root() {
    return (
        <div className={styles.Root}>
            <Outlet />
        </div>
    );
}

export default Root;
