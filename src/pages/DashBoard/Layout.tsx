import styles from './Layout.module.scss';
import React, { useState } from 'react';
import { DashboardRoutes } from '@routes/DashboardRoutes';
import { Header } from '@components/DashBoardComponents/Header/Header';
import cn from 'classnames';

export const Layout = () => {
    const [isMobMenuActive, setIsMobMenuActive] = useState(false);

    return (
        <>
            <div
                className={cn(styles.Layout, {
                    [styles.mobileMenu]: isMobMenuActive
                })}>
                <Header setIsMobMenuActive={setIsMobMenuActive} />
                <main className={styles.main}>
                    <DashboardRoutes />
                </main>
            </div>
            <footer className={styles.footer} />
        </>
    );
};
