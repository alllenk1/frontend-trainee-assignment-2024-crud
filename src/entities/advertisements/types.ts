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

export type CreateAdvertisementArgs = Omit<Advertisement, 'id'>;
export type UpdateAdvertisementArgs = { id: Advertisement['id']; body: Pick<Advertisement, 'name' | 'description' | 'imageUrl' | 'price'> };

export type AdvertisementSortValues = 'priceIncrease' | 'priceDecrease' | 'likes' | 'views' | '';
