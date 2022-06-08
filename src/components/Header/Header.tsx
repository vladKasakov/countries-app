import { useEffect } from 'react';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelect } from '../../hooks/redux';
import { Theme } from '../../models';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';
import Container from '../UI/Container/Container';
import styles from './Header.module.scss';

const Header = () => {
  const theme = useAppSelect((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleAppTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const newTheme = localStorage.getItem('theme');
    if (newTheme) {
      dispatch(setTheme(newTheme as Theme));
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/countries-app" className={styles.homelink}>
            <span>Where in the world?</span>
          </Link>

          <div className={styles.toggletheme} onClick={toggleAppTheme}>
            {theme === 'dark' ? (
              <IoMoonSharp className={styles.icon} />
            ) : (
              <IoMoonOutline className={styles.icon} />
            )}
            <span className={styles.themetitle}>
              {theme === 'dark' ? 'Dark' : 'Light'} Mode
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
