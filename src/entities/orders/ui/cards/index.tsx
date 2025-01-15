import * as React from 'react';
import { Box, Typography } from '@mui/material';

import type { Order } from '@/entities/orders/types';

import { OrdersCard } from './card';
import style from './index.module.scss';

type OrdersCardsProps = {
    orders: Order[];
};

export const OrdersCards = ({ orders }: OrdersCardsProps) => {
    return (
        <Box className={style.content}>
            {orders.length > 0 ? (
                orders.map((item) => (
                    <OrdersCard
                        key={item.id}
                        id={item.id}
                        status={item.status}
                        createdAt={item.createdAt}
                        finishedAt={item.finishedAt}
                        items={item.items}
                        deliveryWay={item.deliveryWay}
                        total={item.total}
                    />
                ))
            ) : (
                <Typography>Ничего не нашли</Typography>
            )}
        </Box>
    );
};
