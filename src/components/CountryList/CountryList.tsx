import { ICountry } from '../../models/index';
import Container from '../UI/Container/Container';
import Spinner from '../UI/Spinner/Spinner';
import CountryItem from './CountryItem/CountryItem';
import styles from './CountryList.module.scss';

type Props = {
  filteredCountries: ICountry[];
  isLoading: boolean;
};

const CountryList = ({ filteredCountries, isLoading }: Props) => {
  return (
    <section className={styles.list}>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.wrapper}>
            {filteredCountries &&
              filteredCountries.map(
                (c) =>
                  c.name !== 'Afghanistan' && (
                    <CountryItem key={c.name} {...c} />
                  )
              )}
          </div>
        )}
      </Container>
    </section>
  );
};
export default CountryList;
