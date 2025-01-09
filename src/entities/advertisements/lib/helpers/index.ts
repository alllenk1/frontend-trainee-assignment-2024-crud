import type { Advertisement, AdvertisementSortValue } from '@/entities/advertisements';

export const filterAdvertisements = (
    data: Advertisement[] | undefined,
    isLoading: boolean,
    searchString: string,
    sortValue: AdvertisementSortValue
): Advertisement[] => {
    if (!isLoading && data) {
        let dataCopy: Advertisement[] = [...data];

        if (searchString) dataCopy = dataCopy.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
        if (sortValue) {
            if (sortValue === 'price_decrease' || sortValue === 'price_increase') {
                dataCopy.sort((item1, item2) => (sortValue === 'price_decrease' ? item2.price - item1.price : item1.price - item2.price));
            } else {
                dataCopy.sort((item1, item2) => item2[sortValue] - item1[sortValue]);
            }
        }

        return dataCopy;
    }

    return [];
};

export const paginateAdvertisements = (array: Advertisement[], currentPage: number, limit: number) => {
    const startIndex = (currentPage - 1) * limit;

    return array.slice(startIndex, startIndex + limit);
};
