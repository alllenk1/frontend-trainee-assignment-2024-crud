import { Order } from '@/entities/orders/types';

import { baseApi } from '@/shared/api';

const ordersApi = baseApi.injectEndpoints?.({
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => `orders`,
            providesTags: ['Orders'],
        }),
    }),
});

export const { useGetOrdersQuery } = ordersApi;
