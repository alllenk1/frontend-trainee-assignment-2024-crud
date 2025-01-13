import { AdvertisementLimitValue, AdvertisementSortValue } from '../types';

type AdvertisementSortItem = {
    value: AdvertisementSortValue;
    text: string;
};

type AdvertisementLimitItem = {
    value: AdvertisementLimitValue;
};

export const sortItems: AdvertisementSortItem[] = [
    { value: 'price_increase', text: 'возрастанию цены' },
    { value: 'price_decrease', text: 'убыванию цены' },
    { value: 'likes', text: 'лайкам' },
    { value: 'views', text: 'просмотрам' },
];

export const limitItems: AdvertisementLimitItem[] = [{ value: '5' }, { value: '10' }, { value: '20' }, { value: '50' }];
