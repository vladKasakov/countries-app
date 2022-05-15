import { useEffect, useState } from 'react';

import Arrow from '../../components/Arrow/Arrow';
import CountryList from '../../components/CountryList/CountryList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { ICountry } from '../../models';
import { useGetCountriesQuery } from '../../services/countries';

const Home = () => {
  const [select, setSelect] = useState('');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<ICountry[]>([]);

  const { data: countries, isLoading } = useGetCountriesQuery([
    'name',
    'population',
    'region',
    'capital',
    'flag',
    'alpha3Code',
  ]);

  useEffect(() => {
    const filterCounters = (countries: ICountry[]) => {
      let filtered = [...countries];

      if (select) {
        filtered = filtered.filter((c) => c.region === select);
      }
      if (search) {
        filtered = filtered.filter((c) =>
          c.name.toLowerCase().includes(search)
        );
      }

      setFiltered(filtered);
    };

    if (countries) {
      filterCounters(countries);
    }
  }, [select, search, countries]);

  return (
    <>
      <SearchPanel
        select={select}
        setSelect={setSelect}
        search={search}
        setSearch={setSearch}
      />
      <CountryList isLoading={isLoading} filteredCountries={filtered} />
      <Arrow />
    </>
  );
};
export default Home;
