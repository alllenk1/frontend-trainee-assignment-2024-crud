'use client';

import { PageContainer, useActivePage } from '@toolpad/core';
import type { Breadcrumb } from '@toolpad/core';

import { AdvertisementCard, useGetAdvertisementsQuery } from '@/entities/advertisments';

import style from './index.module.scss';

export const AdvertisementsPageComponent = () => {
    const activePage = useActivePage();
    const { data, isLoading } = useGetAdvertisementsQuery({ limit: 10 });

    const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', path: '/' }, ...(activePage ? activePage.breadcrumbs : [])];

    return (
        <PageContainer title="Все объявления" breadcrumbs={breadcrumbs}>
            <div className={style.content}>
                {!isLoading &&
                    data &&
                    data.map((item) => (
                        <AdvertisementCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            createdAt={item.createdAt}
                            price={item.price}
                            likes={item.likes}
                            views={item.views}
                        />
                    ))}
            </div>
        </PageContainer>
    );
};
