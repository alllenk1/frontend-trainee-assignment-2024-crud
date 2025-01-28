import { Divider, Typography } from '@mui/material';
import { PageContainer } from '@toolpad/core';

import { AuthCredentialsForm, AuthGoogleButton } from '@/entities/auth';

import style from './index.module.scss';

export const SigninComponent = () => {
    return (
        <PageContainer className={style.container}>
            <AuthGoogleButton />
            <Divider className={style.divider}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    или
                </Typography>
            </Divider>
            <AuthCredentialsForm />
        </PageContainer>
    );
};
