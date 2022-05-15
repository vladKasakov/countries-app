import styles from './Container.module.scss';

type Props = {
  children: null | JSX.Element | JSX.Element[];
};
const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
export default Container;
