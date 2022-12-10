import styles from './Layout.module.scss';
import React from 'react';
import { DashboardRoutes } from '@routes/DashboardRoutes';
import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { SvgIcon } from '@components/MainComponents/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const Layout = () => {
    return (
        <>
            <div className={styles.Layout}>
                <header className={styles.header}>
                    <Link to='/' className={styles.logo}>
                        {' '}
                        <SvgIcon Icon={Logo} width={96} height={96} />
                    </Link>
                    <nav>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link
                                    className={cn(
                                        styles.menuLink,
                                        'subtitle-md'
                                    )}
                                    to='/'
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link
                                    className={cn(
                                        styles.menuLink,
                                        'subtitle-md'
                                    )}
                                    to='/breeds'
                                >
                                    Breeds
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link
                                    className={cn(
                                        styles.menuLink,
                                        'subtitle-md'
                                    )}
                                    to='/images'
                                >
                                    Images
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className={styles.main}>
                    <DashboardRoutes />
                </main>
            </div>
            <footer className={styles.footer} />
        </>
    );
};
