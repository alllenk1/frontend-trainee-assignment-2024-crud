import { DeliveryWays, Order, PriceSortItems } from '../types';

export const orderStatusesItems: Record<Order['status'], string> = {
    0: 'Создан',
    1: 'Оплачен',
    2: 'В пути',
    3: 'Доставлен',
    4: 'Получен',
    5: 'Завершен',
    6: 'Возврат',
};

export const deliveryWayItems: Record<DeliveryWays, string> = {
    mail: 'Почта',
    sdek: 'СДЭК',
};

export const priceSortItems: Record<PriceSortItems, string> = {
    priceIncrease: 'возрастанию цены',
    priceDecrease: 'убыванию цены',
};
