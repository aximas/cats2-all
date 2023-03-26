import React from 'react';
import { MainRoutes } from '@routes/MainRoutes';
import { LightBoxContainer } from '@components/MainComponents/LightBox/LightBox';
import { useAppSelector } from '@core/utils/hooks/reduxHooks';
import cn from 'classnames';
import { Alert } from '@components/MainComponents/Alert/Alert';

function App() {
    // Redux hooks
    const [isActive] = useAppSelector(({ lightBox }) => [lightBox.isActive]);

    return (
        <div className={cn('container', { ['modal-active']: isActive })}>
            <Alert />
            <MainRoutes />
            <LightBoxContainer />
        </div>
    );
}

export default App;
