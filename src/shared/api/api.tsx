import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_API_URL || 'http://localhost:3002/',
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json');
        headers.set('content-type', 'application/json');
    },
});

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Advertisements', 'Advertisement', 'Orders'],
    endpoints: () => ({}),
});
