import type { Advertisement } from '@/entities/advertisements/types';

import { baseApi } from '@/shared/api';

const advertisementsApi = baseApi.injectEndpoints?.({
    endpoints: (builder) => ({
        getAdvertisements: builder.query<Advertisement[], void>({
            query: () => `/advertisements`,
            providesTags: ['Advertisements'],
        }),
    }),
});

export const { useGetAdvertisementsQuery } = advertisementsApi;
