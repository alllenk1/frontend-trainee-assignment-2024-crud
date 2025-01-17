import * as React from 'react';
import { Box, Button, MenuItem } from '@mui/material';

import { limitItems, sortItems } from '@/entities/advertisements';
import type { LimitValues } from '@/entities/types';

import { SelectComponent } from '@/shared/ui';

import type { AdvertisementSortValues } from '../../types';
import style from './index.module.scss';

type AdvertisementsFormProps = {
    limitValue: LimitValues;
    sortValue: AdvertisementSortValues;
    onChangeLimit: (value: LimitValues) => void;
    onChangeSortValue: (value: AdvertisementSortValues) => void;
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
            <SelectComponent<LimitValues>
                label="Объявлений на странице"
                value={limitValue}
                onChangeValue={onChangeLimit}
                onResetValue={() => onChangeLimit('' as LimitValues)}
            >
                {limitItems.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </SelectComponent>
            <SelectComponent<AdvertisementSortValues>
                label="Сортировать по"
                value={sortValue}
                onChangeValue={onChangeSortValue}
                onResetValue={() => onChangeSortValue('' as AdvertisementSortValues)}
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
