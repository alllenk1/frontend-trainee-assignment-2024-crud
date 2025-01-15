import * as React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { limitItems, sortItems } from '@/entities/advertisements';

import type { AdvertisementLimitValue, AdvertisementSortValue } from '../../types';
import style from './index.module.scss';

type AdvertisementsFormProps = {
    limitValue: AdvertisementLimitValue | '';
    sortValue: AdvertisementSortValue | '';
    onChangeLimit: (value: AdvertisementLimitValue) => void;
    onChangeSortValue: (value: AdvertisementSortValue) => void;
    onChangeCreateModal: (value: boolean) => void;
};

export const AdvertisementsFilterForm = ({
    limitValue,
    onChangeLimit,
    sortValue,
    onChangeSortValue,
    onChangeCreateModal,
}: AdvertisementsFormProps) => {
    return (
        <Box className={style.form} component="form">
            <FormControl fullWidth>
                <InputLabel id="sort-label">Объявлений на странице</InputLabel>
                <Select
                    label="Объявлений на странице"
                    value={limitValue}
                    onChange={(e) => onChangeLimit(e.target.value as AdvertisementLimitValue)}
                >
                    {limitItems.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="sort-label">Сортировать по</InputLabel>
                <Select
                    label="Сортировать по"
                    value={sortValue}
                    onChange={(e) => onChangeSortValue(e.target.value as AdvertisementSortValue)}
                >
                    {Object.entries(sortItems).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button className={style.button} variant="contained" size="medium" onClick={() => onChangeCreateModal(true)}>
                Новое объявление
            </Button>
        </Box>
    );
};
