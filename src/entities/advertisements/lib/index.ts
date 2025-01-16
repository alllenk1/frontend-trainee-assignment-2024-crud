import { AdvertisementLimitValue, AdvertisementSortValue } from '../types';

export const sortItems: Record<Exclude<AdvertisementSortValue, ''>, string> = {
    priceIncrease: 'возрастанию цены',
    priceDecrease: 'убыванию цены',
    likes: 'лайкам',
    views: 'просмотрам',
};

export const limitItems: AdvertisementLimitValue[] = ['5', '10', '20', '50'];
