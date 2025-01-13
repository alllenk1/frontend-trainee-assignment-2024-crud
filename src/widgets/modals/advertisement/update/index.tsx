import * as React from 'react';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

import { validateCreateAdvertisementForm } from '@/widgets/modals/lib/helpers';
import { AdvertisementsFormItems } from '@/widgets/modals/types';

import { AdvertisementsForm } from '@/features/advertisements/ui';

import { type Advertisement, useUpdateAdvertisementMutation } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

import { DEFAULT_ERRORS, DEFAULT_VALUES } from '../../lib';
import style from './index.module.scss';

type AdvertisementUpdateModalProps = {
    data: Advertisement;
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementUpdateModal = ({ data, isOpen, onClose }: AdvertisementUpdateModalProps) => {
    const [values, setValues] = useState<AdvertisementsFormItems>(DEFAULT_VALUES);
    const [errors, setErrors] = useState<AdvertisementsFormItems>(DEFAULT_ERRORS);

    const [updateAdvertisement] = useUpdateAdvertisementMutation({});

    useEffect(() => {
        if (data) {
            setValues({
                name: data.name || '',
                description: data.description || '',
                imageUrl: data.imageUrl || '',
                price: String(data.price) || '',
            });
        }
    }, [data]);

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
            await updateAdvertisement({ id: data.id, body: { name, description, imageUrl, price: Number(price) } })
                .unwrap()
                .then(() => {
                    onClose(false);
                    setValues(DEFAULT_VALUES);
                    setErrors(DEFAULT_ERRORS);
                });
        }
    };

    return (
        <ModalComponent title="Изменить объявление" isOpen={isOpen} onClose={() => onClose(false)}>
            <AdvertisementsForm errors={errors} values={values} onChangeValues={handleChange}>
                <Button className={style.button} variant="contained" size="medium" onClick={handleSubmit}>
                    Сохранить
                </Button>
            </AdvertisementsForm>
        </ModalComponent>
    );
};
