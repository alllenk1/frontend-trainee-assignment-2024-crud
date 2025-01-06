import * as React from 'react';
import { Box, Typography } from '@mui/material';

import type { Advertisement } from '@/entities/advertisements';

import { AdvertisementCard } from './card';
import style from './index.module.scss';

type AdvertisementCardsProps = {
    filteredAdvertisements: Advertisement[];
};

export const AdvertisementCards = ({ filteredAdvertisements }: AdvertisementCardsProps) => {
    return (
        <Box className={style.content}>
            {filteredAdvertisements.length > 0 ? (
                filteredAdvertisements.map((item) => (
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
                ))
            ) : (
                <Typography>Ничего не нашли</Typography>
            )}
        </Box>
    );
};
