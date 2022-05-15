import { Link } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>We are sorry, page not found!</h1>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/countries-app" className={styles.tohome}>
            Back to homepage
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default NotFound;
