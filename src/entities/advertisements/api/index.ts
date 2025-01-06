import type { Advertisement, GetAdvertisementArgs } from '@/entities/advertisements/types';

import { baseApi } from '@/shared/api';

const advertisementsApi = baseApi.injectEndpoints?.({
    endpoints: (builder) => ({
        getAdvertisements: builder.query<Advertisement[], GetAdvertisementArgs>({
            query: ({ limit }) => `/advertisements?_start=0&_limit=${limit}`,
            providesTags: ['Advertisements'],
        }),
    }),
});

export const { useGetAdvertisementsQuery } = advertisementsApi;
