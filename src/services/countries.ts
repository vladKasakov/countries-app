import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICountry, IDetailCountry } from '../models';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/' }),
  endpoints: (build) => ({
    getCountries: build.query<ICountry[], string[]>({
      query: (fields: string[]) => ({
        url: `/all`,
        params: {
          fields: fields && fields.join(','),
        },
      }),
    }),
    getCountry: build.query<IDetailCountry, string>({
      query: (code: string) => ({
        url: `/alpha/${code}`,
      }),
    }),
    getNeighboursByCodes: build.query<ICountry[], string>({
      query: (codes: string) => ({
        url: `alpha?codes=${codes ? codes : ''}`,
      }),
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryQuery,
  useGetNeighboursByCodesQuery,
} = countryApi;
