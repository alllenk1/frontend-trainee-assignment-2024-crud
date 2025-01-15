'use client';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { AppProvider } from '@toolpad/core/nextjs';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/store/store';

const NAVIGATION = [
    {
        segment: '',
        title: 'Объявления',
    },
    {
        segment: 'orders',
        title: 'Заказы',
    },
];

type LayoutProps = {
    children: ReactNode;
};

const AppTitle = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h6">Личный кабинет</Typography>
        </Stack>
    );
};

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body>
                <Suspense>
                    <Provider store={store}>
                        <AppProvider navigation={NAVIGATION}>
                            <DashboardLayout slots={{ appTitle: AppTitle }}>{children}</DashboardLayout>
                        </AppProvider>
                    </Provider>
                </Suspense>
            </body>
        </html>
    );
}
