import { useEffect, useState } from 'react';

import { ICountry, IDetailCountry } from '../../models';
import { useGetNeighboursByCodesQuery } from '../../services/countries';
import BackButton from '../UI/BackButton/BackButton';
import styles from './Info.module.scss';
import Neighbors from './Neighbors/Neighbors';

type Props = {
  country: IDetailCountry;
};
const Info = ({ country }: Props) => {
  const {
    area,
    capital,
    currencies,
    flag,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
  } = country;

  const [neighborsQuery, setNeighborsQuery] = useState('');
  const [neighbors, setNeighbors] = useState<ICountry[] | null>(null);
  const [skip, setSkip] = useState(true);
  const { data: neighborsResponseData } = useGetNeighboursByCodesQuery(
    neighborsQuery,
    { skip }
  );

  const alt = `Flag of ${name}`;

  useEffect(() => {
    if (country.borders) {
      setSkip(false);
      setNeighborsQuery(country.borders.join(','));
    }
  }, [country]);

  useEffect(() => {
    if (neighborsResponseData) {
      setNeighbors(neighborsResponseData);
    }
  }, [neighborsResponseData]);

  return (
    <>
      {country && (
        <div className={styles.outerwrapper}>
          <BackButton />
          <div className={styles.innerwrapper}>
            <div className={styles.imgbox}>
              <img src={flag} alt={alt} />
            </div>
            <div className={styles.info}>
              <h2>{name ? name : 'none'}</h2>
              <div className={styles.lists}>
                <div className={styles.infolist}>
                  <p>
                    Native Name: <span>{nativeName ? nativeName : 'none'}</span>
                  </p>
                  <p>
                    Capital: <span>{capital ? capital : 'none'}</span>
                  </p>
                  <p>
                    Region: <span>{region ? region : 'none'}</span>
                  </p>
                  <p>
                    Sub Region: <span>{subregion ? subregion : 'none'}</span>
                  </p>
                  <p>
                    Languages:{' '}
                    <span>
                      {languages
                        ? languages.map((lang) => lang.name).join(', ')
                        : 'none'}
                    </span>
                  </p>
                </div>
                <div className={styles.infolist}>
                  <p>
                    Population:{' '}
                    <span>
                      {population ? population.toLocaleString('en') : 'none'}
                    </span>
                  </p>
                  <p>
                    Area:{' '}
                    <span>
                      {area ? area.toLocaleString('en') : '0'} km<sup>2</sup>
                    </span>
                  </p>
                  <p>
                    Density:{' '}
                    <span>
                      {population && area
                        ? (population / area).toFixed(2)
                        : '0'}
                    </span>
                  </p>
                  <p>
                    Top Level Domain:{' '}
                    <span>{topLevelDomain ? topLevelDomain : 'none'}</span>
                  </p>
                  <p>
                    Currencies:{' '}
                    <span>
                      {currencies
                        ? currencies
                            .map((curr) => curr.code + ' (' + curr.name + ')')
                            .join(', ')
                        : 'none'}
                    </span>
                  </p>
                </div>
              </div>
              <Neighbors neighbors={neighbors} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Info;
