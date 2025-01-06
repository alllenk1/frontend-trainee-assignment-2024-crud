'use client';

import * as React from 'react';
import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';
import { useMemo, useState } from 'react';

import type { Advertisement } from '@/entities/advertisements';
import { useGetAdvertisementsQuery } from '@/entities/advertisements/api';
import { AdvertisementCards, AdvertisementSearchBar } from '@/entities/advertisements/ui';

import { SkeletonCards } from '@/shared/ui';

export const AdvertisementsPageComponent = () => {
    const activePage = useActivePage();

    const { data, isLoading } = useGetAdvertisementsQuery({ limit: 10 });

    const [searchString, setSearchString] = useState<string>('');

    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    const filteredAdvertisements = useMemo<Advertisement[]>(() => {
        if (!isLoading && data) {
            return data.filter((item) => item.name.toLowerCase().trim().includes(searchString));
        }

        return [];
    }, [isLoading, data, searchString]);

    return (
        <PageContainer title="Все объявления" breadcrumbs={breadcrumbs}>
            <AdvertisementSearchBar searchString={searchString} onChangeSearchString={setSearchString} />
            {isLoading ? <SkeletonCards /> : <AdvertisementCards filteredAdvertisements={filteredAdvertisements} />}
        </PageContainer>
    );
};
