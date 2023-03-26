import React from 'react';

import { useClipboardCopy } from '@core/utils/hooks/useClipboardCopy';
import { ReactComponent as CopyIcon } from '@assets/img/icons/copy.svg';

import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Button } from './Button';

import styles from './Button.module.scss';

interface CopyButtonProps {
    text: string;
    size?: number;
}

export const CopyButton = ({ text, size = 20 }: CopyButtonProps) => {
    /* Custom hooks */
    const { copyToClipboard } = useClipboardCopy();

    /* Handlers */
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        copyToClipboard(text);
    };
    return (
        <Button onClick={handleClick} type='button'>
            <SvgIcon
                width={size}
                height={size}
                className={styles.copyIcon}
                Icon={CopyIcon}
            />
        </Button>
    );
};
