import * as React from 'react';
import { Box, MenuItem } from '@mui/material';

import { orderStatusesItems, priceSortItems } from '@/entities/orders/lib';
import { OrderStatusItems, PriceSortItems } from '@/entities/orders/types';

import { SelectComponent } from '@/shared/ui';

import style from './index.module.scss';

type OrdersFilterFormProps = {
    priceValue: PriceSortItems;
    onChangePriceValue: (value: PriceSortItems) => void;
    statusValue: OrderStatusItems;
    onChangeStatusValue: (value: OrderStatusItems) => void;
};

export const OrdersFilterForm = ({ priceValue, onChangePriceValue, statusValue, onChangeStatusValue }: OrdersFilterFormProps) => {
    return (
        <Box className={style.form} component="form">
            <SelectComponent<PriceSortItems>
                label="Сортировать по"
                value={priceValue}
                onChangeValue={onChangePriceValue}
                onResetValue={() => onChangePriceValue('' as PriceSortItems)}
            >
                {Object.entries(priceSortItems).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                        {value}
                    </MenuItem>
                ))}
            </SelectComponent>
            <SelectComponent<OrderStatusItems>
                label="Статус заказа"
                value={statusValue}
                onChangeValue={onChangeStatusValue}
                onResetValue={() => onChangeStatusValue('' as OrderStatusItems)}
            >
                {Object.entries(orderStatusesItems).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                        {value}
                    </MenuItem>
                ))}
            </SelectComponent>
        </Box>
    );
};
