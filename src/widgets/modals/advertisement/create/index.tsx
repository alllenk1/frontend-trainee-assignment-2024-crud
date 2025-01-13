import * as React from 'react';
import { Button } from '@mui/material';
import { type ChangeEvent, useState } from 'react';

import { AdvertisementsForm } from '@/features/advertisements/ui';

import { useCreateAdvertisementMutation } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

import { DEFAULT_ERRORS, DEFAULT_VALUES } from '../../lib';
import { validateCreateAdvertisementForm } from '../../lib/helpers';
import type { AdvertisementsFormItems } from '../../types';
import style from './index.module.scss';

type AdvertisementCreateModalProps = {
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementCreateModal = ({ isOpen, onClose }: AdvertisementCreateModalProps) => {
    const [values, setValues] = useState<AdvertisementsFormItems>(DEFAULT_VALUES);
    const [errors, setErrors] = useState<AdvertisementsFormItems>(DEFAULT_ERRORS);

    const [createAdvertisement, { isLoading }] = useCreateAdvertisementMutation({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        setErrors((prev) => ({
            ...prev,
            [event.target.name]: '',
        }));
    };

    const handleSubmit = async () => {
        const { name, description, imageUrl, price } = values;

        if (validateCreateAdvertisementForm(values, setErrors)) {
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
                    setValues(DEFAULT_VALUES);
                    setErrors(DEFAULT_ERRORS);
                });
        }
    };

    return (
        <ModalComponent title="Новое объявление" isOpen={isOpen} onClose={() => onClose(false)}>
            <AdvertisementsForm errors={errors} values={values} onChangeValues={handleChange}>
                <Button className={style.button} variant="contained" size="medium" disabled={isLoading} onClick={handleSubmit}>
                    Добавить
                </Button>
            </AdvertisementsForm>
        </ModalComponent>
    );
};
