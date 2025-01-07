import { SortItemValue } from '../types';

type SortItem = {
    value: SortItemValue;
    text: string;
};

export const sortItems: SortItem[] = [
    { value: 'price_increase', text: 'возрастанию цены' },
    { value: 'price_decrease', text: 'убыванию цены' },
    { value: 'likes', text: 'лайкам' },
    { value: 'views', text: 'просмотрам' },
];
