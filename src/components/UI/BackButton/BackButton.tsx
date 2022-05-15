import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className={styles.backbutton}>
      <BiArrowBack />
      <span>Back</span>
    </button>
  );
};
export default BackButton;
