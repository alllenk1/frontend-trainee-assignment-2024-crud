import { AdvertisementSortValue } from '../types';

type AdvertisementSortItem = {
    value: AdvertisementSortValue;
    text: string;
};

export const sortItems: AdvertisementSortItem[] = [
    { value: 'price_increase', text: 'возрастанию цены' },
    { value: 'price_decrease', text: 'убыванию цены' },
    { value: 'likes', text: 'лайкам' },
    { value: 'views', text: 'просмотрам' },
];
