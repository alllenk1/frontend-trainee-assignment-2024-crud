'use client';

import * as React from 'react';
import { Pagination } from '@mui/material';
import { PageContainer } from '@toolpad/core';
import { ChangeEvent, useMemo, useState } from 'react';

import style from '@/pages/advertisements/index.module.scss';

import { type Order, OrdersCards } from '@/entities/orders';
import { useGetOrdersQuery } from '@/entities/orders/api';
import { filterOrders } from '@/entities/orders/lib/helpers';
import { PriceSortItems } from '@/entities/orders/types';
import { OrdersFilterForm } from '@/entities/orders/ui/filter-form';
import type { LimitValues } from '@/entities/types';

import { paginateArray } from '@/shared/helpers';
import { SkeletonCards } from '@/shared/ui';

export const OrdersPageComponent = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<LimitValues>(10);
    const [statusValue, setStatusValue] = useState<Order['status'] | ''>('');
    const [priceValue, setPriceValue] = useState<PriceSortItems | ''>('');

    const { data: ordersData, isLoading: isLoadingOrders } = useGetOrdersQuery();

    const filteredOrders = useMemo<Order[]>(
        () => filterOrders(ordersData, isLoadingOrders, statusValue, priceValue),
        [ordersData, isLoadingOrders, statusValue, priceValue]
    );

    const paginatedOrders = useMemo<Order[]>(
        () => paginateArray(filteredOrders, currentPage, +limit),
        [filteredOrders, currentPage, limit]
    );

    const pagesCount = Math.ceil(filteredOrders.length / +limit);

    return (
        <PageContainer title="Все заказы" breadcrumbs={[]}>
            {isLoadingOrders ? (
                <SkeletonCards />
            ) : (
                <>
                    <OrdersFilterForm
                        limitValue={limit}
                        statusValue={statusValue}
                        priceValue={priceValue}
                        onChangeLimit={setLimit}
                        onChangeStatusValue={setStatusValue}
                        onChangePriceValue={setPriceValue}
                    />
                    <OrdersCards orders={paginatedOrders} />
                    {filteredOrders.length > +limit && (
                        <Pagination
                            className={style.pagination}
                            page={currentPage}
                            count={pagesCount}
                            onChange={(event: ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
                        />
                    )}
                </>
            )}
        </PageContainer>
    );
};
