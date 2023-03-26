import React from 'react';
import cn from 'classnames';

import { InputProps } from './Input.props';

import styles from './Input.module.scss';

export const Input = ({ className, largeness = '', ...props }: InputProps) => {
    if (props.type === 'checkbox') {
        return (
            <label className={styles.label}>
                <div className={styles.checkboxWrapper}>
                    <input className={cn(styles.input, className)} {...props} />
                    <div className={styles.layer} />
                </div>
            </label>
        );
    }

    if (props.type === 'number') {
        return (
            <input
                className={cn(
                    styles.input,
                    styles.removedArrows,
                    className,
                    styles[largeness],
                    'body'
                )}
                onKeyPress={(e) => {
                    if (
                        (e.key != 'Backspace' &&
                            e.key !== undefined &&
                            e.key < '0') ||
                        e.key > '9'
                    ) {
                        e.preventDefault();
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault();
                    }
                }}
                onWheel={(e) => e.currentTarget.blur()}
                {...props}
            />
        );
    }

    return (
        <input
            className={cn(styles.input, className, styles[largeness], 'body')}
            {...props}
        />
    );
};
