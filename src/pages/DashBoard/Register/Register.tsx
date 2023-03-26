import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import styles from '@pages/DashBoard/Login/Login.module.scss';
import { Button, Input } from '@components/MainComponents';
import cn from 'classnames';
import { useForm } from '@core/utils/hooks/useForm';
import { Navigate } from 'react-router-dom';

export const Register = () => {
    type RegisterType = {
        email: string;
        password: string;
        password2: string;
    };

    // Redux hook
    const dispatch = useAppDispatch();
    const auth = useAppSelector(({ auth }) => auth);

    // React hooks
    const { handleSubmit, handleChange, data, errors, setData } =
        useForm<RegisterType>({
            validations: {},
            onSubmit: () => {
                const { email, password, password2 } = data;

                if (password === password2) {
                    dispatch({
                        type: 'auth/Registration',
                        payload: { email, password }
                    });
                } else {
                    console.log('passwords different');
                }
            },
            initialValues: {
                email: '',
                password: '',
                password2: ''
            }
        });

    console.log('data', data);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.input}>
                <Input
                    type='text'
                    autoComplete='email'
                    onChange={handleChange('email')}
                    className={styles.inputField}
                />
                <span
                    className={cn(styles.inputLabel, {
                        [styles.empty]: data?.email.length === 0
                    })}>
                    Email
                </span>
            </label>
            <label className={styles.input}>
                <Input
                    type='password'
                    autoComplete='current-password'
                    onChange={handleChange('password')}
                    className={styles.inputField}
                />
                <span
                    className={cn(styles.inputLabel, {
                        [styles.empty]: data?.password.length === 0
                    })}>
                    Password
                </span>
            </label>
            <label className={styles.input}>
                <Input
                    type='password'
                    autoComplete='current-password'
                    onChange={handleChange('password2')}
                    className={styles.inputField}
                />
                <span
                    className={cn(styles.inputLabel, {
                        [styles.empty]: data?.password2.length === 0
                    })}>
                    Reply Password
                </span>
            </label>
            <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.btn}
                disabled={auth.isLoading}>
                Sign In
            </Button>
            <p className='body'>I have an account</p>
            <Button
                as='link'
                to='/login'
                variant='contained'
                size='large'
                color='primary'
                className={styles.btn}>
                Log In
            </Button>
            {auth && <Navigate to='/' />}
        </form>
    );
};
