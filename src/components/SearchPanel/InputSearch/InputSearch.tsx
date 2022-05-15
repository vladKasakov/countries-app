import { MdSearch } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import styles from './InputSearch.module.scss';

type Props = {
  search: string;
  setSearch: (str: string) => void;
};
const InputSearch = ({ search, setSearch }: Props) => {
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <div className={styles.wrapper}>
      <MdSearch size={'20px'} />
      <input
        value={search}
        onChange={handleSearch}
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Search for a country..."
      />
      {search && (
        <IoClose
          size={'20'}
          onClick={clearSearch}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};
export default InputSearch;
