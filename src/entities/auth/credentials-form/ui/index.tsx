'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { type FormSchema, formSchema } from '../lib';
import style from './index.module.scss';

export const AuthCredentialsForm = () => {
    const router = useRouter();

    const [userError, setUserError] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormSchema> = async (data) => {
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (res && !res.error) {
            router.push('/');
        } else {
            setUserError(true);
        }
    };

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    return (
        <Box className={style.form} component="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <TextField
                    {...register('email')}
                    placeholder="Адрес электронной почты"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    onChange={() => setUserError(false)}
                />
            </FormControl>
            <FormControl>
                <TextField
                    {...register('password')}
                    type="password"
                    placeholder="Пароль из букв и цифр, не меньше 8 символов"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    onChange={() => setUserError(false)}
                />
            </FormControl>
            <Button className={style.button} type="submit" variant="contained">
                Войти
            </Button>
            <Box className={`${style.errorContainer} ${userError ? '' : style.errorContainerHidden}`}>
                <Typography className={style.error} variant="body1">
                    Нет такого пользователя ¯\_(ツ)_/¯
                </Typography>
            </Box>
        </Box>
    );
};
