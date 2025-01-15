import type { Advertisement } from '@/entities/advertisements/types';

export type OrderStatuses = Readonly<{
    Created: 0;
    Paid: 1;
    Transport: 2;
    DeliveredToThePoint: 3;
    Received: 4;
    Archived: 5;
    Refund: 6;
}>;

type OrderItem = Advertisement & { count: number };

export type Order = {
    id: string;
    status: OrderStatuses[keyof OrderStatuses];
    createdAt: string;
    finishedAt?: string;
    items: Array<OrderItem>;
    deliveryWay: DeliveryWays;
    total: number;
};

export type DeliveryWays = 'mail' | 'sdek';
