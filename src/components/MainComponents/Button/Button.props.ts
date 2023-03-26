import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    DetailedHTMLProps
} from 'react';
import { LinkProps } from 'react-router-dom';

type BaseProps = {
    size?: 'large' | 'medium' | 'small' | '';
    variant?: 'outlined' | 'contained' | 'subNavBtn' | 'text' | '';
    color?: 'primary' | 'danger' | '';
    arrow?: 'left' | 'right' | '';
    isLoader?: boolean;
    isConfirming?: boolean;
    loaderPosition?: 'prepend' | 'append';
    loaderColor?: string;
    className?: string;
};

type ButtonAsButton = BaseProps &
    Omit<
        Omit<
            DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
            'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
        >,
        keyof BaseProps
    > & {
        as?: 'button';
    };

type ButtonAsLink = BaseProps &
    Omit<LinkProps, keyof BaseProps> & {
        as: 'link';
    };

type ButtonAsExternal = BaseProps &
    Omit<
        DetailedHTMLProps<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            HTMLAnchorElement
        >,
        keyof BaseProps
    > & {
        as: 'externalLink';
    };

export type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink;
