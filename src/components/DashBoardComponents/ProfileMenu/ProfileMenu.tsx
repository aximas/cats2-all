import { ReactComponent as ProfileActive } from '@assets/logo/dashboard/profile_active.svg';
import { SvgIcon } from '@components/MainComponents/SvgIcon/SvgIcon';
import styles from './ProfileMenu.module.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import cn from 'classnames';
import { useOnClickOutside } from '@core/utils/hooks/useOnClickOutside';
import { useAppDispatch } from '@core/utils/hooks/reduxHooks';

export const ProfileMenu = () => {
    // Redux hook
    const dispatch = useAppDispatch();

    // React hooks
    const [isActive, setIsActive] = useState(false);
    const profileMenuRef = useRef(null);

    /* Custom hooks */
    useOnClickOutside(profileMenuRef, () => setIsActive(false));

    const handleLogout = () => {
        dispatch({
            type: 'auth/Logout'
        });
    };

    return (
        <div className={styles.menuContainer} ref={profileMenuRef}>
            <button
                onClick={() => setIsActive((prevState) => !prevState)}
                className={styles.btn}>
                <SvgIcon Icon={ProfileActive} className={styles.menuIcon} />
            </button>
            <div
                className={cn(styles.menu, {
                    [styles.active]: isActive
                })}>
                <Link to='/profile' className={styles.menuLink}>
                    Profile
                </Link>
                <button className={styles.menuLink} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};
