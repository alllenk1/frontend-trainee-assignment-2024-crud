import * as React from 'react';
import { Button } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';

import { AdvertisementsForm, type FormSchema } from '@/features/advertisement-form';

import { useCreateAdvertisementMutation } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

type AdvertisementCreateModalProps = {
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementCreateModal = ({ isOpen, onClose }: AdvertisementCreateModalProps) => {
    const [createAdvertisement] = useCreateAdvertisementMutation({});

    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        createAdvertisement({
            name: data.name,
            price: +data.price,
            description: data.description,
            imageUrl: data.imageUrl,
            createdAt: new Date().toISOString(),
            views: 0,
            likes: 0,
        }).unwrap();

        onClose(false);
    };

    return (
        <ModalComponent title="Новое объявление" isOpen={isOpen} onClose={() => onClose(false)}>
            <AdvertisementsForm onSubmit={onSubmit}>
                <Button type="submit" variant="contained">
                    Создать
                </Button>
            </AdvertisementsForm>
        </ModalComponent>
    );
};
