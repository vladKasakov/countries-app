import { useParams } from 'react-router-dom';

import Detail from '../../pages/Detail/detail';
import NotFound from '../../pages/NotFound/not-found';

const ValidateCountry = () => {
  const { alpha3code } = useParams();
  let validCode = alpha3code?.match(/^[a-zA-Z]{3}$/);

  if (!validCode) return <NotFound />;
  return <Detail />;
};

export default ValidateCountry;
