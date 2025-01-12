import type { Advertisement, CreateAdvertisementArgs } from '@/entities/advertisements/types';
import { UpdateAdvertisementArgs } from '@/entities/advertisements/types';

import { baseApi } from '@/shared/api';

const advertisementsApi = baseApi.injectEndpoints?.({
    endpoints: (builder) => ({
        getAdvertisements: builder.query<Advertisement[], void>({
            query: () => `advertisements`,
            providesTags: ['Advertisements'],
        }),
        getAdvertisement: builder.query<Advertisement, string>({
            query: (id) => `advertisements/${id}`,
            providesTags: ['Advertisement'],
        }),
        createAdvertisement: builder.mutation<void, CreateAdvertisementArgs>({
            query: (body) => ({ url: 'advertisements', method: 'POST', body }),
            invalidatesTags: (_result, error) => (!error ? ['Advertisements'] : []),
        }),
        updateAdvertisement: builder.mutation<void, UpdateAdvertisementArgs>({
            query: ({ id, body }) => ({ url: `advertisements/${id}`, method: 'PATCH', body }),
            invalidatesTags: (_result, error) => (!error ? ['Advertisements', 'Advertisement'] : []),
        }),
    }),
});

export const { useGetAdvertisementsQuery, useGetAdvertisementQuery, useCreateAdvertisementMutation, useUpdateAdvertisementMutation } =
    advertisementsApi;
