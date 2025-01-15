'use client';

import * as React from 'react';
import { PageContainer } from '@toolpad/core';
import { useMemo, useState } from 'react';

import { type Order, OrdersCards } from '@/entities/orders';
import { useGetOrdersQuery } from '@/entities/orders/api';
import { filterOrders } from '@/entities/orders/lib/helpers';
import { PriceSortItems } from '@/entities/orders/types';
import { OrdersFilterForm } from '@/entities/orders/ui/filter-form';

import { SkeletonCards } from '@/shared/ui';

export const OrdersPageComponent = () => {
    const [statusValue, setStatusValue] = useState<Order['status'] | ''>('');
    const [priceValue, setPriceValue] = useState<PriceSortItems | ''>('');

    const { data: ordersData, isLoading: isLoadingOrders } = useGetOrdersQuery();

    const filteredOrders = useMemo<Order[]>(
        () => filterOrders(ordersData, isLoadingOrders, statusValue, priceValue),
        [ordersData, isLoadingOrders, statusValue, priceValue]
    );

    return (
        <PageContainer title="Все заказы" breadcrumbs={[]}>
            {!isLoadingOrders && ordersData ? (
                <>
                    <OrdersFilterForm
                        statusValue={statusValue}
                        onChangeStatusValue={setStatusValue}
                        priceValue={priceValue}
                        onChangePriceValue={setPriceValue}
                    />
                    <OrdersCards orders={filteredOrders} />
                </>
            ) : (
                <SkeletonCards />
            )}
        </PageContainer>
    );
};
