import * as React from 'react';
import { Box, TextField } from '@mui/material';
import type { ChangeEvent, ReactNode } from 'react';

import type { AdvertisementsFormItems } from '@/widgets/modals/types';

import style from './index.module.scss';

type AdvertisementsFormProps = {
    errors: AdvertisementsFormItems;
    values: AdvertisementsFormItems;
    onChangeValues: (event: ChangeEvent<HTMLInputElement>) => void;
    children: ReactNode;
};

export const AdvertisementsForm = ({ errors, values, onChangeValues, children }: AdvertisementsFormProps) => {
    return (
        <Box className={style.form} component="form">
            <TextField
                className={style.input}
                variant="outlined"
                placeholder="Название"
                name="name"
                error={!!errors.name}
                helperText={errors.name}
                value={values.name}
                onChange={onChangeValues}
            />
            <TextField
                className={style.input}
                variant="outlined"
                placeholder="Описание"
                name="description"
                value={values.description}
                onChange={onChangeValues}
            />
            <TextField
                className={style.input}
                variant="outlined"
                placeholder="Ссылка на картинку"
                name="imageUrl"
                error={!!errors.imageUrl}
                helperText={errors.imageUrl}
                value={values.imageUrl}
                onChange={onChangeValues}
            />
            <TextField
                className={style.input}
                variant="outlined"
                placeholder="Цена"
                name="price"
                error={!!errors.price}
                helperText={errors.price}
                value={values.price}
                onChange={onChangeValues}
            />
            {children}
        </Box>
    );
};
