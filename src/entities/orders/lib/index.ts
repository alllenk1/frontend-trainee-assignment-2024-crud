import { DeliveryWays, Order } from '../types';

export const orderStatusesItems: Readonly<Record<Order['status'], string>> = {
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
