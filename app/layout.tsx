'use client';

import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { AppProvider } from '@toolpad/core/nextjs';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { AppTitle } from '@/shared/ui/app-title';

const NAVIGATION = [
    {
        segment: 'advertisements',
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

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body>
                <Suspense>
                    <AppProvider navigation={NAVIGATION}>
                        <DashboardLayout
                            slots={{
                                appTitle: AppTitle,
                            }}
                        >
                            {children}
                        </DashboardLayout>
                    </AppProvider>
                </Suspense>
            </body>
        </html>
    );
}
