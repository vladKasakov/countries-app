import { Link } from 'react-router-dom';

import { ICountry } from '../../../models';
import styles from './Neighbors.module.scss';

type Props = {
  neighbors: ICountry[] | null;
};
const Neighbors = ({ neighbors }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h4>Border countries:</h4>
      <div className={styles.neighbors}>
        {neighbors
          ? neighbors.map((neighbor) => (
              <Link
                className={styles.link}
                key={neighbor.name}
                to={`/countries-app/countries/${neighbor.alpha3Code}`}
              >
                {neighbor.name}
              </Link>
            ))
          : 'none'}
      </div>
    </div>
  );
};
export default Neighbors;
