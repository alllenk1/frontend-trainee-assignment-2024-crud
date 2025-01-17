import type { LimitValues } from '@/entities/types';

import type { AdvertisementSortValues } from '../types';

export const sortItems: Record<Exclude<AdvertisementSortValues, ''>, string> = {
    priceIncrease: 'возрастанию цены',
    priceDecrease: 'убыванию цены',
    likes: 'лайкам',
    views: 'просмотрам',
};

export const limitItems: LimitValues[] = ['5', '10', '20'];
