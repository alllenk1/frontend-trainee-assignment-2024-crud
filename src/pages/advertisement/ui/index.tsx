'use client';

import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Typography } from '@mui/material';
import { PageContainer } from '@toolpad/core';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { AdvertisementDeleteModal, AdvertisementUpdateModal } from '@/widgets/modals';

import { useGetAdvertisementQuery } from '@/entities/advertisements';

import style from './index.module.scss';

export const AdvertisementPageComponent = () => {
    const params = useParams<{ id: string }>();

    const [isOpenUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [isOpenDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

    const { data, isLoading } = useGetAdvertisementQuery(params ? params.id : '');

    return (
        !isLoading &&
        data && (
            <PageContainer className={style.container} title={data.name}>
                <Box className={style.buttons}>
                    <Button className={style.button} variant="outlined" color="error" onClick={() => setOpenDeleteModal(true)}>
                        Удалить
                    </Button>
                    <Button className={style.button} variant="contained" onClick={() => setOpenUpdateModal(true)}>
                        Изменить
                    </Button>
                </Box>
                <img className={style.image} src={data.imageUrl || '/img/placeholder-img.png'} alt={data.name} />
                <Box className={style.details}>
                    <Box className={style.icons}>
                        <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                            <FavoriteIcon /> {data.likes}
                        </Typography>
                        <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                            <VisibilityIcon /> {data.views}
                        </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        {`${data.price} руб.`}
                    </Typography>
                </Box>
                {data.description && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {data.description}
                    </Typography>
                )}
                <Box className={style.buttons_mobile}>
                    <Button className={style.button} variant="outlined" color="error" onClick={() => setOpenDeleteModal(true)}>
                        Удалить
                    </Button>
                    <Button className={style.button} variant="contained" onClick={() => setOpenUpdateModal(true)}>
                        Изменить
                    </Button>
                </Box>
                <AdvertisementUpdateModal data={data} isOpen={isOpenUpdateModal} onClose={setOpenUpdateModal} />
                <AdvertisementDeleteModal isOpen={isOpenDeleteModal} onClose={setOpenDeleteModal} />
            </PageContainer>
        )
    );
};
