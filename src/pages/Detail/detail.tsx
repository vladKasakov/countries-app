import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import Info from '../../components/Info/Info';
import Spinner from '../../components/UI/Spinner/Spinner';
import { IDetailCountry } from '../../models';
import { useGetCountryQuery } from '../../services/countries';

const Detail = () => {
  const { alpha3code } = useParams();
  const { data: country, isLoading } = useGetCountryQuery(alpha3code as string);
  const [detailCountry, setDetailCountry] = useState<IDetailCountry | null>(
    null
  );

  useEffect(() => {
    if (country) {
      setDetailCountry(country);
    }
  }, [country]);

  return (
    <>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          detailCountry && <Info country={detailCountry} />
        )}
      </Container>
    </>
  );
};

export default Detail;
