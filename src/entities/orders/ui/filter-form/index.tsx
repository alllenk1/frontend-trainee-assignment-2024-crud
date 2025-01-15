import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { orderStatusesItems, priceSortItems } from '@/entities/orders/lib';
import type { Order } from '@/entities/orders/types';
import { PriceSortItems } from '@/entities/orders/types';

import style from './index.module.scss';

type OrdersFilterFormProps = {
    priceValue: PriceSortItems | '';
    onChangePriceValue: (value: PriceSortItems) => void;
    statusValue: Order['status'] | '';
    onChangeStatusValue: (value: Order['status']) => void;
};

export const OrdersFilterForm = ({ priceValue, onChangePriceValue, statusValue, onChangeStatusValue }: OrdersFilterFormProps) => {
    return (
        <Box className={style.form} component="form">
            <FormControl fullWidth>
                <InputLabel id="sort-label">Сортировать по</InputLabel>
                <Select
                    labelId="sort-label"
                    label="Сортировать по"
                    value={priceValue}
                    onChange={(e) => onChangePriceValue(e.target.value as PriceSortItems)}
                >
                    {Object.entries(priceSortItems).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="status-label">Статус заказа</InputLabel>
                <Select
                    labelId="status-label"
                    label="Статус заказа"
                    value={statusValue}
                    onChange={(e) => onChangeStatusValue(e.target.value as Order['status'])}
                >
                    {Object.entries(orderStatusesItems).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
