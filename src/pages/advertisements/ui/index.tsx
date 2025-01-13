'use client';

import * as React from 'react';
import { Pagination } from '@mui/material';
import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';
import { type ChangeEvent, useMemo, useState } from 'react';

import { AdvertisementCreateModal } from '@/widgets/modals';

import type { Advertisement, AdvertisementSortValue } from '@/entities/advertisements';
import { useGetAdvertisementsQuery } from '@/entities/advertisements/api';
import { filterAdvertisements, paginateAdvertisements } from '@/entities/advertisements/lib/helpers';
import { AdvertisementsCards, AdvertisementsFilterForm, AdvertisementsSearchBar } from '@/entities/advertisements/ui';

import { SkeletonCards } from '@/shared/ui';

import style from './index.module.scss';

export const AdvertisementsPageComponent = () => {
    const activePage = useActivePage();

    const [isOpenCreateModal, setOpenCreateModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortValue, setSortValue] = useState<AdvertisementSortValue>('');
    const [searchString, setSearchString] = useState<string>('');

    const { data: advertisementsData, isLoading: isLoadingAdvertisements } = useGetAdvertisementsQuery();

    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    const filteredAdvertisements = useMemo<Advertisement[]>(
        () => filterAdvertisements(advertisementsData, isLoadingAdvertisements, searchString, sortValue),
        [advertisementsData, isLoadingAdvertisements, searchString, sortValue]
    );

    const paginatedAdvertisements = useMemo<Advertisement[]>(
        () => paginateAdvertisements(filteredAdvertisements, currentPage, limit),
        [filteredAdvertisements, currentPage, limit]
    );

    const pagesCount = Math.ceil(filteredAdvertisements.length / limit);

    return (
        <PageContainer title="Все объявления" breadcrumbs={breadcrumbs}>
            {isLoadingAdvertisements ? (
                <SkeletonCards />
            ) : (
                <>
                    <AdvertisementsSearchBar searchString={searchString} onChangeSearchString={setSearchString} />
                    <AdvertisementsFilterForm
                        sortValue={sortValue}
                        onChangeLimit={setLimit}
                        onChangeSortValue={setSortValue}
                        onChangeCreateModal={setOpenCreateModal}
                    />
                    <AdvertisementsCards advertisements={paginatedAdvertisements} />
                    <Pagination
                        className={style.pagination}
                        page={currentPage}
                        count={pagesCount}
                        onChange={(event: ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
                    />
                    <AdvertisementCreateModal isOpen={isOpenCreateModal} onClose={setOpenCreateModal} />
                </>
            )}
        </PageContainer>
    );
};
