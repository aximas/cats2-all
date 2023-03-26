import React, { useEffect, useState } from 'react';

export const useWindowMatchMedia = (
    maxWidth: number,
    handler: React.Dispatch<React.SetStateAction<boolean>>
) => {
    /*** Get static width for correct appear for first render, below Listener will work only when width changed */
    const [width] = useState(window.innerWidth || screen.width);

    useEffect(() => {
        if (maxWidth > width) handler(true);

        const handleChange = (e: MediaQueryListEvent) => handler(e.matches);

        window
            .matchMedia(`(max-width: ${maxWidth}px)`)
            .addEventListener('change', handleChange);

        return () => {
            window
                .matchMedia(`(max-width: ${maxWidth}px)`)
                .removeEventListener('change', handleChange);
        };
    }, []);
};
