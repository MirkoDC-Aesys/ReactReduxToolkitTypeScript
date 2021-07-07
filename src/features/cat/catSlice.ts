import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Cat {
    breeds: [];
    id: string;
    url: string;
    width: number;
    height: number;
}

export const catAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thecatapi.com/v1",
        /*prepareHeaders(headers) {
            headers.set('key', 'value')
            return headers
        }*/
    }),
    endpoints(builder) {
        return {
            getCat: builder.query<Cat[], void>({
                query: () => `/images/search`
            })
        }
    }
})

export const { useGetCatQuery } = catAPI
