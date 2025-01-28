import { zodResolver } from '@hookform/resolvers/zod';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { type FormSchema, formSchema } from '../lib';
import style from './index.module.scss';

type AdvertisementsFormProps = {
    defaultData?: FormSchema;
    onSubmit: (formValuesL: FormSchema) => void;
    children: ReactNode;
};

export const AdvertisementsForm = ({ defaultData, onSubmit, children }: AdvertisementsFormProps) => {
    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultData || {
            name: '',
            description: '',
            imageUrl: '',
            price: '',
        },
    });

    useEffect(() => {
        setFocus('name');
    }, [setFocus]);

    return (
        <Box className={style.form} component="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Typography className={style.label}>Название</Typography>
                <TextField
                    {...register('name')}
                    placeholder="Например, «Умная колонка»"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                />
            </FormControl>
            <FormControl>
                <Typography className={style.label}>Описание</Typography>
                <TextField placeholder="Подробнее о товаре" {...register('description')} />
            </FormControl>
            <FormControl>
                <Typography className={style.label}>Ссылка на изображение</Typography>
                <TextField
                    placeholder="Доступные форматы — jpg, jpeg, png"
                    {...register('imageUrl')}
                    error={!!errors.imageUrl}
                    helperText={errors?.imageUrl?.message}
                />
            </FormControl>
            <FormControl>
                <Typography className={style.label}>Цена</Typography>
                <TextField placeholder="Только цифры" {...register('price')} error={!!errors.price} helperText={errors?.price?.message} />
            </FormControl>
            {children}
        </Box>
    );
};
