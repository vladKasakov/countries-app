import Container from '../UI/Container/Container';
import CustomSelect from './CustomSelect/CustomSelect';
import InputSearch from './InputSearch/InputSearch';
import styles from './SearchPanel.module.scss';

type Props = {
  select: string;
  search: string;
  setSelect: (str: string) => void;
  setSearch: (str: string) => void;
};
const SearchPanel = ({ select, search, setSelect, setSearch }: Props) => {
  return (
    <div className={styles.searchpanel}>
      <Container>
        <div className={styles.wrapper}>
          <InputSearch search={search} setSearch={setSearch} />
          <CustomSelect select={select} setSelect={setSelect} />
        </div>
      </Container>
    </div>
  );
};
export default SearchPanel;
