import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@components/MainComponents';
import { ReactComponent as ArrowIcon } from '@assets/logo/arrows/chevron-down.svg';
import { ReactComponent as LoaderIcon } from '@assets/logo/loaders/walletloader.svg';

import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

export const Button = ({
    children,
    className,
    size = '',
    variant = '',
    color = '',
    arrow = '',
    isLoader = false,
    isConfirming = false,
    loaderPosition = 'prepend',
    loaderColor = '#fff',
    ...props
}: ButtonProps) => {
    /* Redux hooks */

    if (props.as === 'link') {
        return (
            <Link
                className={cn(
                    styles.btn,
                    styles[size],
                    styles[color],
                    styles[arrow],
                    className,
                    {
                        [styles[variant]]: variant !== 'subNavBtn',
                        subNavBtn: variant === 'subNavBtn',
                        [styles.loader]: isLoader || isConfirming,
                        [styles[size]]: size !== ''
                    }
                )}
                {...props}>
                {arrow && (
                    <SvgIcon className={styles.arrowIcon} Icon={ArrowIcon} />
                )}
                {!isConfirming && isLoader && loaderPosition === 'prepend' && (
                    <div className={styles.loaderIconWrapper}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
                {isConfirming && (
                    <div className={styles.confirmingText}>
                        Confirming{''}
                        <span className={styles.points}>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                        </span>
                    </div>
                )}
                {children}
                {!isConfirming && isLoader && loaderPosition === 'append' && (
                    <div
                        className={cn(
                            styles.loaderIconWrapper,
                            styles.loaderPrepend
                        )}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
            </Link>
        );
    } else if (props.as === 'externalLink') {
        return (
            <a
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                    styles.btn,
                    styles[size],
                    styles[color],
                    styles[arrow],
                    className,
                    {
                        [styles[variant]]: variant !== 'subNavBtn',
                        subNavBtn: variant === 'subNavBtn',
                        [styles.loader]: isLoader || isConfirming,
                        [styles[size]]: size !== ''
                    }
                )}
                {...props}>
                {arrow && (
                    <SvgIcon className={styles.arrowIcon} Icon={ArrowIcon} />
                )}
                {!isConfirming && isLoader && loaderPosition === 'prepend' && (
                    <div className={styles.loaderIconWrapper}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
                {isConfirming && (
                    <div className={styles.confirmingText}>
                        Confirming{''}
                        <span className={styles.points}>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                        </span>
                    </div>
                )}
                {children}
                {!isConfirming && isLoader && loaderPosition === 'append' && (
                    <div
                        className={cn(
                            styles.loaderIconWrapper,
                            styles.loaderPrepend
                        )}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
            </a>
        );
    } else {
        return (
            <button
                {...props}
                className={cn(
                    styles.btn,
                    styles[size],
                    styles[color],
                    styles[arrow],
                    className,
                    {
                        [styles[variant]]: variant !== 'subNavBtn',
                        subNavBtn: variant === 'subNavBtn',
                        [styles.loader]: isLoader || isConfirming,
                        [styles[size]]: size !== ''
                    }
                )}
                {...props}>
                {arrow && (
                    <SvgIcon className={styles.arrowIcon} Icon={ArrowIcon} />
                )}
                {!isConfirming && isLoader && loaderPosition === 'prepend' && (
                    <div className={styles.loaderIconWrapper}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
                {isConfirming && (
                    <div className={styles.confirmingText}>
                        Confirming{''}
                        <span className={styles.points}>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                            <span className={styles.point}>.</span>
                        </span>
                    </div>
                )}
                {children}
                {!isConfirming && isLoader && loaderPosition === 'append' && (
                    <div
                        className={cn(
                            styles.loaderIconWrapper,
                            styles.loaderPrepend
                        )}>
                        <SvgIcon
                            className={cn(styles.loaderIcon, 'rotateAnimation')}
                            Icon={LoaderIcon}
                            fill={loaderColor}
                        />
                    </div>
                )}
            </button>
        );
    }
};
