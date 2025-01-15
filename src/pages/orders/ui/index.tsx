'use client';

import * as React from 'react';
import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';

import { OrdersCards } from '@/entities/orders';
import { useGetOrdersQuery } from '@/entities/orders/api';

import { SkeletonCards } from '@/shared/ui';

export const OrdersPageComponent = () => {
    const activePage = useActivePage();
    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    const { data: ordersData, isLoading: isLoadingOrders } = useGetOrdersQuery();

    return (
        <PageContainer title="Все заказы" breadcrumbs={breadcrumbs}>
            {!isLoadingOrders && ordersData ? <OrdersCards orders={ordersData} /> : <SkeletonCards />}
        </PageContainer>
    );
};
