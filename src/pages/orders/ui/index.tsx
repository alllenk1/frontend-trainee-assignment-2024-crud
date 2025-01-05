'use client';

import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';

export const OrdersPageComponent = () => {
    const activePage = useActivePage();
    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    return <PageContainer title="Все заказы" breadcrumbs={breadcrumbs}></PageContainer>;
};
