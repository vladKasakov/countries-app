import { Link } from 'react-router-dom';

import { ICountry } from '../../../models';
import LazyImage from '../../UI/LazyImage/LazyImage';
import styles from './CountryItem.module.scss';

const CountryItem = (props: ICountry) => {
  const { flag, capital, name, alpha3Code, population, region } = props;
  const alt = `Flag of ${name}`;

  return (
    <Link to={`countries/${alpha3Code}`} className={styles.item}>
      <LazyImage
        src={flag}
        alt={alt}
        style={{ minHeight: '150px', maxHeight: '350px' }}
      />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>
          <span>Population: </span>
          {population ? population.toLocaleString('en') : 'none'}
        </p>
        <p>
          <span>Region: </span>
          {region ? region : 'none'}
        </p>
        <p>
          <span>Capital: </span>
          {capital ? capital : 'none'}
        </p>
      </div>
    </Link>
  );
};
export default CountryItem;
