'use client';

import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { permanentRedirect, useParams } from 'next/navigation';

import { useDeleteAdvertisementMutation } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

import style from './index.module.scss';

type AdvertisementDeleteModalProps = {
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementDeleteModal = ({ isOpen, onClose }: AdvertisementDeleteModalProps) => {
    const params = useParams();

    const [deleteAdvertisement] = useDeleteAdvertisementMutation({});

    const handleDelete = async () => {
        await deleteAdvertisement(params ? String(params.id) : '');
        permanentRedirect(`/`);
    };

    return (
        <ModalComponent isOpen={isOpen} onClose={() => onClose(false)}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Вы уверены, что хотите удалить объявление?
            </Typography>
            <Box className={style.buttons}>
                <Button className={style.button} variant="outlined" color="error" onClick={handleDelete}>
                    Удалить
                </Button>
                <Button className={style.button} variant="contained" onClick={() => onClose(false)}>
                    Отменить
                </Button>
            </Box>
        </ModalComponent>
    );
};
