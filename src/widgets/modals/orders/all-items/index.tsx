'use client';

import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import type { Advertisement } from '@/entities/advertisements';

import { ModalComponent } from '@/shared/ui';

import style from './index.module.scss';

type OrdersAllItemsModalProps = {
    items: Advertisement[];
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const OrdersAllItemsModal = ({ items, isOpen, onClose }: OrdersAllItemsModalProps) => {
    const router = useRouter();

    return (
        <ModalComponent title="Товары в заказе" isOpen={isOpen} onClose={() => onClose(false)}>
            {items.map((item, index) => (
                <Card className={style.item} key={index} onClick={() => router.push(`/advertisements/${item.id}`)}>
                    <img className={style.image} src={item.imageUrl || '/img/placeholder-img.png'} alt={item.name} />{' '}
                    <CardContent className={style.description} sx={{ paddingBottom: '0' }}>
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            {item.name}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            {`${item.price} руб.`}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </ModalComponent>
    );
};
