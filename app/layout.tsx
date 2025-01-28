'use client';

import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { AppProvider } from '@toolpad/core/nextjs';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
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

function AppAction() {
    const { status } = useSession();

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            {status === 'authenticated' && (
                <Button color="primary" href="#" component={Link} onClick={() => signOut({ callbackUrl: '/' })}>
                    Выйти
                </Button>
            )}
            <ThemeSwitcher />
        </Stack>
    );
}

const AppTitle = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2} sx={{ justifyContent: 'space-between', flexGrow: 1 }}>
            <Typography variant="h6">Личный кабинет</Typography>
        </Stack>
    );
};

const AppContent = ({ children }: LayoutProps) => {
    const { status } = useSession();

    return (
        <DashboardLayout slots={{ appTitle: AppTitle, toolbarActions: AppAction }} hideNavigation={status !== 'authenticated'}>
            {children}
        </DashboardLayout>
    );
};

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body>
                <Suspense>
                    <Provider store={store}>
                        <SessionProvider>
                            <AppProvider navigation={NAVIGATION}>
                                <AppContent>{children}</AppContent>
                            </AppProvider>
                        </SessionProvider>
                    </Provider>
                </Suspense>
            </body>
        </html>
    );
}
