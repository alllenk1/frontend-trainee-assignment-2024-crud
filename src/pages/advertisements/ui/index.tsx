'use client';

import * as React from 'react';
import { Pagination } from '@mui/material';
import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';
import { type ChangeEvent, useMemo, useState } from 'react';

import type { Advertisement, AdvertisementSortValue } from '@/entities/advertisements';
import { useGetAdvertisementsQuery } from '@/entities/advertisements/api';
import { filterAdvertisements, paginateAdvertisements } from '@/entities/advertisements/lib/helpers';
import { AdvertisementsCards, AdvertisementsForm, AdvertisementsSearchBar } from '@/entities/advertisements/ui';

import { SkeletonCards } from '@/shared/ui';

import style from './index.module.scss';

export const AdvertisementsPageComponent = () => {
    const activePage = useActivePage();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortValue, setSortValue] = useState<AdvertisementSortValue>('');
    const [searchString, setSearchString] = useState<string>('');

    const { data, isLoading } = useGetAdvertisementsQuery();

    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    const filteredAdvertisements = useMemo<Advertisement[]>(
        () => filterAdvertisements(data, isLoading, searchString, sortValue),
        [data, isLoading, searchString, sortValue]
    );

    const paginatedAdvertisements = useMemo<Advertisement[]>(
        () => paginateAdvertisements(filteredAdvertisements, currentPage, limit),
        [filteredAdvertisements, currentPage, limit]
    );

    const pagesCount = Math.ceil(filteredAdvertisements.length / limit);

    return (
        <PageContainer title="Все объявления" breadcrumbs={breadcrumbs}>
            {isLoading ? (
                <SkeletonCards />
            ) : (
                <>
                    <AdvertisementsSearchBar searchString={searchString} onChangeSearchString={setSearchString} />
                    <AdvertisementsForm sortValue={sortValue} onChangeLimit={setLimit} onChangeSortValue={setSortValue} />
                    <AdvertisementsCards advertisements={paginatedAdvertisements} />
                    <Pagination
                        className={style.pagination}
                        page={currentPage}
                        count={pagesCount}
                        onChange={(event: ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
                    />
                </>
            )}
        </PageContainer>
    );
};
