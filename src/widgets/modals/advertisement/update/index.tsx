import * as React from 'react';
import { Button } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';

import { AdvertisementsForm, FormSchema } from '@/features/advertisements/form';

import { type Advertisement, useUpdateAdvertisementMutation } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

type AdvertisementUpdateModalProps = {
    data: Advertisement;
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementUpdateModal = ({ data, isOpen, onClose }: AdvertisementUpdateModalProps) => {
    const [updateAdvertisement] = useUpdateAdvertisementMutation({});

    const onSubmit: SubmitHandler<FormSchema> = (formData) => {
        updateAdvertisement({
            id: data.id,
            body: {
                name: formData.name,
                description: formData.description,
                imageUrl: formData.imageUrl,
                price: +formData.price,
            },
        });

        onClose(false);
    };

    return (
        <ModalComponent title="Изменить объявление" isOpen={isOpen} onClose={() => onClose(false)}>
            <AdvertisementsForm defaultData={data} onSubmit={onSubmit}>
                <Button type="submit" variant="contained">
                    Сохранить
                </Button>
            </AdvertisementsForm>
        </ModalComponent>
    );
};
