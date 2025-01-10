import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';

import { AdvertisementUpdateModal } from '@/widgets/modals';

import type { Advertisement } from '@/entities/advertisements';
import { useGetAdvertisementQuery } from '@/entities/advertisements';

import { dateFormat } from '@/shared/helpers';

import style from './index.module.scss';

export const AdvertisementsCard = ({ id, name, description, imageUrl, createdAt, price, likes, views }: Advertisement) => {
    const { data, isLoading } = useGetAdvertisementQuery(id);

    const [isOpenUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

    console.log(id);
    return (
        <>
            <Card className={style.card} onClick={() => setOpenUpdateModal(true)}>
                <CardHeader title={name} subheader={dateFormat(createdAt)} />
                <CardMedia className={style.image} component="img" height="240" image={imageUrl || '/img/placeholder-img.png'} />
                <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description && (description.length < 100 ? description : `${description.slice(0, 100)}...`)}
                    </Typography>
                </CardContent>
                <CardContent className={style.icons} sx={{ paddingBottom: '0' }}>
                    <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                        <FavoriteIcon /> {likes}
                    </Typography>
                    <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                        <VisibilityIcon /> {views}
                    </Typography>
                </CardContent>
                <CardContent sx={{ paddingBottom: '0', justifyContent: '' }}>
                    <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        {`${price} руб.`}
                    </Typography>
                </CardContent>
            </Card>
            {!isLoading && data && <AdvertisementUpdateModal data={data} isOpen={isOpenUpdateModal} onClose={setOpenUpdateModal} />}
        </>
    );
};
