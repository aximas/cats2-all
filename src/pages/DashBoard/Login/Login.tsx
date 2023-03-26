import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import { FormEvent, useState } from 'react';
import { Input } from '@components/MainComponents/Input/Input';
import styles from './Login.module.scss';
import cn from 'classnames';
import { Button } from '@components/MainComponents';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    // Redux hook
    const dispatch = useAppDispatch();
    const auth = useAppSelector(({ auth }) => auth.data);

    // React hooks
    const [data, setData] = useState({ email: '', password: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { email, password } = data;
        dispatch({ type: 'auth/Login', payload: { email, password } });
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.input}>
                <Input
                    type='text'
                    autoComplete='email'
                    onChange={(e) =>
                        setData((prevState) => ({
                            ...prevState,
                            email: e.target.value
                        }))
                    }
                    className={styles.inputField}
                />
                <span
                    className={cn(styles.inputLabel, {
                        [styles.empty]: data.email.length === 0
                    })}>
                    Email
                </span>
            </label>
            <label className={styles.input}>
                <Input
                    type='password'
                    autoComplete='current-password'
                    onChange={(e) =>
                        setData((prevState) => ({
                            ...prevState,
                            password: e.target.value
                        }))
                    }
                    className={styles.inputField}
                />
                <span
                    className={cn(styles.inputLabel, {
                        [styles.empty]: data.password.length === 0
                    })}>
                    Password
                </span>
            </label>
            <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.btn}>
                Log In
            </Button>
            <p className='body'>I don&apos;t have an account</p>
            <Button
                as='link'
                to='/register'
                variant='contained'
                size='large'
                color='primary'
                className={styles.btn}>
                Create new account
            </Button>
            {auth && <Navigate to='/' />}
        </form>
    );
};
