import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '7bcca2cc24msh7bfb15622082ac0p1f9d1fjsn9818e77b677a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) =>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder)=>({
        getCryptos : builder.query({
            query : (count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails : builder.query({
            query : (coinId)=> createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ id, timePeriod }) => createRequest(`coin/${id}/history?timeperiod=${timePeriod}`),
        }),
    })
})


export const { useGetCryptosQuery, useGetCryptoDetailsQuery,  useGetCryptoHistoryQuery} = cryptoApi;
