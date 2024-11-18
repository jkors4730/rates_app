import { FC, useEffect } from 'react';
import { Button, Card, Container, Form, Image } from 'react-bootstrap';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hooks/TypedHooks';
import { loginAction } from '../../store/reducers/login/LoginActions';
import { FormValues } from '../../types/login';
import InputControl from '../../components/UI/InputControl';
import loadingImg from '../../assets/loading.svg';
import styles from './Login.module.scss';

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {} as any;
    let ex = { type: "required" };
    
    if (!values.login) { errors.login = { ...ex, message: "Login* is required!" }; }
    if (!values.password) { errors.password = { ...ex, message: "Password* is required!" }; }

    return {
      values: Object.keys(errors).length ? {} : values,
      errors: errors,
    }
};

const Login: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const {isLoading, error} = useAppSelector( state => state.loginReducer );
    const dispatch = useAppDispatch();

    useEffect( () => {
        document.title = 'Login | Rates App';
    }, [] );

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log('Login credentials', data);
        dispatch( loginAction( data.login, data.password ) );
    };

    if ( isLoading ) {
        return (
        <Container className={styles.container}>
            <Image src={loadingImg} fluid />
        </Container>
        )
    }

    const commonProps = {
        register: register,
        className: styles.control,
        labelClassName: styles.control_label
    };

    return (
        <Container className={styles.container}>
            <Card className={styles.card}>
                <Card.Title className={styles.card_title}>Welcome back!</Card.Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputControl
                        type="text"
                        label="Login"
                        title="Login*"
                        param="login"
                        error={errors.login}
                        {...commonProps}
                    />

                    <InputControl
                        type="password"
                        label="Password"
                        title="Password*"
                        param="password"
                        error={errors.password}
                        {...commonProps}
                    />

                    <Button className={styles.submit} variant="primary" type="submit">
                        Sign in
                    </Button>

                    {
                        error 
                        && <div className='mt-3 text-danger text-center'>{error}</div>
                    }
                </Form>
            </Card>
        </Container>
    );
};

export default Login;