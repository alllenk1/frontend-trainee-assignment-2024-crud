import * as React from 'react';
import { Box, MenuItem } from '@mui/material';

import { limitItems } from '@/entities/advertisements';
import { orderStatusesItems, priceSortItems } from '@/entities/orders/lib';
import type { OrderStatusItems, PriceSortItems } from '@/entities/orders/types';
import type { LimitValues } from '@/entities/types';

import { SelectComponent } from '@/shared/ui';

import style from './index.module.scss';

type OrdersFilterFormProps = {
    limitValue: LimitValues;
    onChangeLimit: (value: LimitValues) => void;
    priceValue: PriceSortItems;
    onChangePriceValue: (value: PriceSortItems) => void;
    statusValue: OrderStatusItems;
    onChangeStatusValue: (value: OrderStatusItems) => void;
};

export const OrdersFilterForm = ({
    limitValue,
    onChangeLimit,
    priceValue,
    onChangePriceValue,
    statusValue,
    onChangeStatusValue,
}: OrdersFilterFormProps) => {
    return (
        <Box className={style.form} component="form">
            <SelectComponent<LimitValues>
                label="Заказов на странице"
                value={limitValue}
                defaultValue={10}
                onChangeValue={onChangeLimit}
                onResetValue={() => onChangeLimit(10 as LimitValues)}
            >
                {limitItems.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </SelectComponent>
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
