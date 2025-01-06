import { configureStore } from '@reduxjs/toolkit/react';

import { baseApi } from '@/shared/api';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
