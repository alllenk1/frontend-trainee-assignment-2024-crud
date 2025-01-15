'use client';

import * as React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import { OrdersAllItemsModal } from '@/widgets/modals';

import { deliveryWayItems, orderStatusesItems } from '@/entities/orders/lib';
import type { Order } from '@/entities/orders/types';

import { dateFormat } from '@/shared/helpers';

import style from './index.module.scss';

export const OrdersCard = ({ status, createdAt, finishedAt, items, deliveryWay, total }: Order) => {
    const [isOpenItemsModal, setOpenItemsModal] = useState<boolean>(false);

    const data = useMemo(
        () => [
            {
                fieldName: 'Статус:',
                fieldValue: orderStatusesItems[status],
            },
            {
                fieldName: 'Заказ создан:',
                fieldValue: dateFormat(createdAt),
            },
            {
                fieldName: 'Заказ завершен:',
                fieldValue: finishedAt ? dateFormat(finishedAt) : '-',
            },
            {
                fieldName: 'Способ доставки:',
                fieldValue: deliveryWayItems[deliveryWay],
            },
            {
                fieldName: 'Сумма заказа:',
                fieldValue: `${total} руб.`,
            },
        ],
        [status, createdAt, finishedAt, deliveryWay, total]
    );

    return (
        <Card className={style.card} onClick={() => {}}>
            {data.map((item) => (
                <CardContent key={item.fieldName} className={style.row} sx={{ paddingBottom: '0' }}>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {item.fieldName}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {item.fieldValue}
                    </Typography>
                </CardContent>
            ))}
            <CardContent sx={{ paddingBottom: '0' }}>
                <Button className={style.button} variant="contained" onClick={() => setOpenItemsModal(true)}>
                    Показать все товары
                </Button>
            </CardContent>
            <OrdersAllItemsModal items={items} isOpen={isOpenItemsModal} onClose={setOpenItemsModal} />
        </Card>
    );
};
