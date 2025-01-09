import * as React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { type ChangeEvent, useState } from 'react';

import { useCreateAdvertisementMutation } from '@/entities/advertisements';

import { DEFAULT_ERRORS, DEFAULT_VALUES, modalStyle } from '../../lib';
import { validateCreateAdvertisementForm } from '../../lib/helpers';
import type { AdvertisementsFormItems } from '../../types';
import style from './index.module.scss';

type AdvertisementCreateModalProps = {
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementCreateModal = ({ isOpen, onClose }: AdvertisementCreateModalProps) => {
    const [form, setForm] = useState<AdvertisementsFormItems>(DEFAULT_VALUES);
    const [errors, setErrors] = useState<AdvertisementsFormItems>(DEFAULT_ERRORS);

    const [createAdvertisement, { isLoading }] = useCreateAdvertisementMutation({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        setErrors((prev) => ({
            ...prev,
            [event.target.name]: '',
        }));
    };

    const handleSubmit = async () => {
        const { name, description, imageUrl, price } = form;

        if (validateCreateAdvertisementForm(form, setErrors)) {
            await createAdvertisement({
                name,
                description,
                imageUrl,
                price: Number(price),
                createdAt: new Date().toISOString(),
                views: 0,
                likes: 0,
            })
                .unwrap()
                .then(() => {
                    onClose(false);
                    setForm(DEFAULT_VALUES);
                    setErrors(DEFAULT_ERRORS);
                });
        }
    };

    return (
        <Modal open={isOpen} onClose={() => onClose(false)}>
            <Box sx={modalStyle} className={style.modal}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Новое объявление
                </Typography>
                <Box className={style.form} component="form">
                    <TextField
                        className={style.input}
                        variant="outlined"
                        placeholder="Название"
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        value={form.name}
                        onChange={handleChange}
                    />
                    <TextField
                        className={style.input}
                        variant="outlined"
                        placeholder="Описание"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    <TextField
                        className={style.input}
                        variant="outlined"
                        placeholder="Ссылка на картинку"
                        name="imageUrl"
                        error={!!errors.imageUrl}
                        helperText={errors.imageUrl}
                        value={form.imageUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        className={style.input}
                        variant="outlined"
                        placeholder="Цена"
                        name="price"
                        error={!!errors.price}
                        helperText={errors.price}
                        value={form.price}
                        onChange={handleChange}
                    />
                    <Button className={style.button} variant="contained" size="medium" disabled={isLoading} onClick={handleSubmit}>
                        Добавить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
