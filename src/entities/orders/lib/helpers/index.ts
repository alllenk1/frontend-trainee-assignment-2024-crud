import type { Order, PriceSortItems } from '@/entities/orders';

export const filterOrders = (
    data: Order[] | undefined,
    isLoading: boolean,
    statusValue: Order['status'] | '',
    priceValue: PriceSortItems | ''
): Order[] => {
    if (!isLoading && data) {
        let dataCopy: Order[] = [...data];

        if (statusValue) {
            dataCopy = dataCopy.filter((item) => +item.status === +statusValue);
        }

        if (priceValue) {
            dataCopy.sort((item1, item2) => (priceValue === 'priceDecrease' ? item2.total - item1.total : item1.total - item2.total));
        }

        return dataCopy;
    }

    return [];
};
