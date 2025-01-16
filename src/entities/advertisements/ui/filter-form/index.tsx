import * as React from 'react';
import { Box, Button, MenuItem } from '@mui/material';

import { limitItems, sortItems } from '@/entities/advertisements';

import { SelectComponent } from '@/shared/ui';

import type { AdvertisementLimitValue, AdvertisementSortValue } from '../../types';
import style from './index.module.scss';

type AdvertisementsFormProps = {
    limitValue: AdvertisementLimitValue;
    sortValue: AdvertisementSortValue;
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
            <SelectComponent<AdvertisementLimitValue>
                label="Объявлений на странице"
                value={limitValue}
                onChangeValue={onChangeLimit}
                onResetValue={() => onChangeLimit('' as AdvertisementLimitValue)}
            >
                {limitItems.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </SelectComponent>
            <SelectComponent<AdvertisementSortValue>
                label="Сортировать по"
                value={sortValue}
                onChangeValue={onChangeSortValue}
                onResetValue={() => onChangeSortValue('' as AdvertisementSortValue)}
            >
                {Object.entries(sortItems).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                        {value}
                    </MenuItem>
                ))}
            </SelectComponent>
            <Button className={style.button} variant="contained" size="medium" onClick={() => onChangeCreateModal(true)}>
                Новое объявление
            </Button>
        </Box>
    );
};
