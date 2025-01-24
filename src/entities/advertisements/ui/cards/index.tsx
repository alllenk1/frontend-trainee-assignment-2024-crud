import { Box, Typography } from '@mui/material';

import type { Advertisement } from '@/entities/advertisements';

import { AdvertisementsCard } from './card';
import style from './index.module.scss';

type AdvertisementCardsProps = {
    advertisements: Advertisement[];
};

export const AdvertisementsCards = ({ advertisements }: AdvertisementCardsProps) => {
    return (
        <Box className={style.content}>
            {advertisements.length > 0 ? (
                advertisements.map((item) => (
                    <AdvertisementsCard
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
