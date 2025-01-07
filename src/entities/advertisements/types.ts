export type Advertisement = {
    id: string;
    name: string;
    price: number;
    createdAt: string;
    views: number;
    likes: number;
    description?: string;
    imageUrl?: string;
};

export type GetAdvertisementArgs = {
    limit?: number;
};

export type SortItemValue = 'price_increase' | 'price_decrease' | 'likes' | 'views' | '';
