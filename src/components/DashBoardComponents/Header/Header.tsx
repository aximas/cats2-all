import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { SvgIcon } from '@components/MainComponents/SvgIcon/SvgIcon';
import cn from 'classnames';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { ProfileMenu } from '@components/DashBoardComponents/ProfileMenu/ProfileMenu';
import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import { getCookie } from '@core/utils/helpers/getCookie';
import { Button } from '@components/MainComponents';
import { Dispatch } from 'react';
import { useWindowMatchMedia } from '@core/utils/hooks/useWindowMatchMedia';

export const Header = ({
    setIsMobMenuActive
}: {
    setIsMobMenuActive: Dispatch<SetStateAction<boolean>>;
}) => {
    const auth = useAppSelector(({ auth }) => auth);
    const dispatch = useAppDispatch();

    const isAuthenticated = getCookie('is_authenticated');

    const menuRef = useRef<HTMLUListElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isAuthenticated) dispatch({ type: 'auth/Me' });
    }, []);
    useEffect(() => {
        if (isOpen) {
            const listener = (e: Event) => {
                const { target } = e;
                if (target instanceof HTMLElement) {
                    if (
                        target.tagName === 'A' &&
                        menuRef.current &&
                        menuRef.current.contains(target as Node)
                    ) {
                        setIsOpen(false);
                        setIsMobMenuActive(false);
                    }
                }
            };

            document.addEventListener('click', listener);

            return () => {
                document.removeEventListener('click', listener);
            };
        }
    }, [menuRef, isOpen]);

    // Custom hooks
    useWindowMatchMedia(768, setIsMobile);

    const handleLogout = () => {
        dispatch({
            type: 'auth/Logout'
        });
    };
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.logo}>
                <SvgIcon Icon={Logo} width={96} height={96} />
            </Link>
            <nav className={cn(styles.menuNav, { [styles.isOpen]: isOpen })}>
                <ul className={styles.menu} ref={menuRef}>
                    <li className={styles.menuItem}>
                        <Link
                            className={cn(styles.menuLink, 'subtitle-md')}
                            to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link
                            className={cn(styles.menuLink, 'subtitle-md')}
                            to='/breeds'>
                            Breeds
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link
                            className={cn(styles.menuLink, 'subtitle-md')}
                            to='/images'>
                            Images
                        </Link>
                    </li>
                    {auth.isLogged ? (
                        isMobile && (
                            <>
                                <li className={styles.menuItem}>
                                    <Link
                                        to='/profile'
                                        className={styles.menuLink}>
                                        Profile
                                    </Link>
                                </li>
                                <button
                                    className={styles.menuLink}
                                    onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        )
                    ) : (
                        <li className={styles.menuItem}>
                            <Link
                                className={cn(styles.menuLink, 'subtitle-md')}
                                to='/login'>
                                Log In
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            {auth.isLogged && !isMobile && <ProfileMenu />}
            <Button
                className={styles.burgerButton}
                onClick={() => {
                    setIsOpen((prevState) => !prevState);
                    setIsMobMenuActive((prevState) => !prevState);
                }}>
                <span
                    className={cn(styles.burger, { [styles.isOpen]: isOpen })}>
                    <span className={styles.burgerItem}></span>
                </span>
            </Button>
        </header>
    );
};
