import type { Advertisement, CreateAdvertisementArgs } from '@/entities/advertisements/types';

import { baseApi } from '@/shared/api';

const advertisementsApi = baseApi.injectEndpoints?.({
    endpoints: (builder) => ({
        getAdvertisements: builder.query<Advertisement[], void>({
            query: () => `advertisements`,
            providesTags: ['Advertisements'],
        }),
        createAdvertisement: builder.mutation<void, CreateAdvertisementArgs>({
            query: (body) => ({ url: 'advertisements', method: 'POST', body }),
            invalidatesTags: (_result, error) => (!error ? ['Advertisements'] : []),
        }),
    }),
});

export const { useGetAdvertisementsQuery, useCreateAdvertisementMutation } = advertisementsApi;
