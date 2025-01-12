import * as React from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

import { validateCreateAdvertisementForm } from '@/widgets/modals/lib/helpers';
import { AdvertisementsFormItems } from '@/widgets/modals/types';

import { type Advertisement, useUpdateAdvertisementMutation } from '@/entities/advertisements';

import { DEFAULT_ERRORS, DEFAULT_VALUES, modalStyle } from '../../lib';
import style from './index.module.scss';

type AdvertisementUpdateModalProps = {
    data: Advertisement;
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementUpdateModal = ({ data, isOpen, onClose }: AdvertisementUpdateModalProps) => {
    const [form, setForm] = useState<AdvertisementsFormItems>(DEFAULT_VALUES);
    const [errors, setErrors] = useState<AdvertisementsFormItems>(DEFAULT_ERRORS);

    const [updateAdvertisement] = useUpdateAdvertisementMutation({});

    useEffect(() => {
        if (data) {
            setForm({
                name: data.name || '',
                description: data.description || '',
                imageUrl: data.imageUrl || '',
                price: String(data.price) || '',
            });
        }
    }, [data]);

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
            await updateAdvertisement({ id: data.id, body: { name, description, imageUrl, price: Number(price) } })
                .unwrap()
                .then(() => {
                    onClose(false);
                    setForm(DEFAULT_VALUES);
                    setErrors(DEFAULT_ERRORS);
                });
        }
    };

    return (
        <Modal className={style.container} open={isOpen} onClose={() => onClose(false)}>
            <Box sx={modalStyle} className={style.modal}>
                <Box className={style.form}>
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
                    <Button className={style.button} variant="contained" size="medium" onClick={handleSubmit}>
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
