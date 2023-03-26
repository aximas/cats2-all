import React from 'react';
import cn from 'classnames';
import parse from 'html-react-parser';

import { removeAlertAction } from '@core/store/alert/alert.slice';
import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import { Button, SvgIcon } from '@components/MainComponents';
import { ReactComponent as AlertCross } from '@assets/icons/cross.svg';
import { ReactComponent as AlertSuccess } from '@assets/icons/status/success-outlined.svg';
import { ReactComponent as AlertWarning } from '@assets/icons/status/warning-outlined-triangle.svg';

import { AlertProps } from './Alert.props';

import styles from './Alert.module.scss';

export const Alert = ({ className }: AlertProps) => {
    /* Redux hooks */
    const alerts = useAppSelector(({ alert }) => alert);
    const dispatch = useAppDispatch();

    /* Handlers */
    const handleClick = (id: string) => () => {
        dispatch(removeAlertAction(id));
    };

    const renderNotifications = () => {
        return alerts.map((item) => (
            <div
                key={item.id}
                className={cn(
                    styles.alert,
                    className,
                    styles[item.type],
                    {
                        [styles.active]: item.id
                    },
                    'body-sm'
                )}
                aria-live='polite'
                aria-atomic='true'>
                {item.type === 'error' ? (
                    <SvgIcon
                        className={styles.alertIcon}
                        Icon={AlertWarning}
                        fill='#fd3f3f'
                    />
                ) : (
                    <SvgIcon className={styles.alertIcon} Icon={AlertSuccess} />
                )}
                <p className={styles.content}>{parse(item.text)}</p>
                {item.isSubmit && (
                    <Button
                        className={styles.btn}
                        onClick={handleClick(item.id)}
                        type='button'>
                        <SvgIcon Icon={AlertCross} />
                    </Button>
                )}
            </div>
        ));
    };

    return (
        <div
            className={cn(styles.wrapper, {
                [styles.active]: alerts.length
            })}>
            {renderNotifications()}
        </div>
    );
};
