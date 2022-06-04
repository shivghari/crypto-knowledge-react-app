import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '7bcca2cc24msh7bfb15622082ac0p1f9d1fjsn9818e77b677a'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder)=>({
        getCryptoNews : builder.query({
            query : ({ newsCategory, count })=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})


export const { useGetCryptoNewsQuery } = cryptoNewsApi;