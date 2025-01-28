'use client';

import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import style from './index.module.scss';

export const AuthGoogleButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams ? searchParams.get('callbackUrl') : '/';

    return (
        <Button
            className={style.button}
            type="submit"
            variant="outlined"
            fullWidth
            onClick={() => signIn('google', { callbackUrl: callbackUrl || '/' })}
        >
            Войти через Google
        </Button>
    );
};
