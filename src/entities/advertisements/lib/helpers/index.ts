import type { Advertisement, AdvertisementSortValues } from '@/entities/advertisements';

export const filterAdvertisements = (
    data: Advertisement[] | undefined,
    isLoading: boolean,
    searchString: string,
    sortValue: AdvertisementSortValues | ''
): Advertisement[] => {
    if (!isLoading && data) {
        let dataCopy: Advertisement[] = [...data];

        if (searchString.length >= 3) dataCopy = dataCopy.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
        if (sortValue) {
            if (sortValue === 'priceDecrease' || sortValue === 'priceIncrease') {
                dataCopy.sort((item1, item2) => (sortValue === 'priceDecrease' ? item2.price - item1.price : item1.price - item2.price));
            } else {
                dataCopy.sort((item1, item2) => item2[sortValue] - item1[sortValue]);
            }
        } else {
            dataCopy.sort((item1, item2) => +new Date(item2.createdAt) - +new Date(item1.createdAt));
        }

        return dataCopy;
    }

    return [];
};
