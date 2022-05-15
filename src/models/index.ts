export interface IOption {
  value: string;
  label: string;
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  alpha3Code: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface IDetailCountry {
  name: string;
  topLevelDomain: string[];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  area: number;
  borders: string[];
  nativeName: string;
  currencies: ICurrency[];
  languages: ILanguage[];
  flag: string;
}

export type Theme = 'dark' | 'light';
