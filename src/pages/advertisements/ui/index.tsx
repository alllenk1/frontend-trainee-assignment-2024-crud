'use client';

import * as React from 'react';
import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';
import { useMemo, useState } from 'react';

import type { Advertisement, SortItemValue } from '@/entities/advertisements';
import { useGetAdvertisementsQuery } from '@/entities/advertisements/api';
import { AdvertisementsCards, AdvertisementsForm, AdvertisementsSearchBar } from '@/entities/advertisements/ui';

import { SkeletonCards } from '@/shared/ui';

export const AdvertisementsPageComponent = () => {
    const activePage = useActivePage();

    const [limit, setLimit] = useState<number | undefined>(undefined);
    const [sortValue, setSortValue] = useState<SortItemValue>('');
    const [searchString, setSearchString] = useState<string>('');

    const { data, isLoading } = useGetAdvertisementsQuery({ limit: limit || 10 });

    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    const filteredAdvertisements = useMemo<Advertisement[]>(() => {
        if (!isLoading && data) {
            let dataCopy: Advertisement[] = [...data];

            if (searchString) dataCopy = dataCopy.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
            if (sortValue) {
                if (sortValue === 'price_decrease' || sortValue === 'price_increase') {
                    dataCopy.sort((item1, item2) =>
                        sortValue === 'price_decrease' ? item2.price - item1.price : item1.price - item2.price
                    );
                } else {
                    dataCopy.sort((item1, item2) => item2[sortValue] - item1[sortValue]);
                }
            }

            return dataCopy;
        }

        return [];
    }, [data, isLoading, searchString, sortValue]);

    return (
        <PageContainer title="Все объявления" breadcrumbs={breadcrumbs}>
            <AdvertisementsSearchBar searchString={searchString} onChangeSearchString={setSearchString} />
            {!isLoading && (
                <AdvertisementsForm limit={limit} sortValue={sortValue} onChangeLimit={setLimit} onChangeSortValue={setSortValue} />
            )}
            {isLoading ? <SkeletonCards /> : <AdvertisementsCards filteredAdvertisements={filteredAdvertisements} />}
        </PageContainer>
    );
};
