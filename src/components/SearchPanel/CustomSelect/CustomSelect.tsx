import Select, { SingleValue } from 'react-select';

import { IOption } from '../../../models';

import './CustomSelect.scss';

const options: IOption[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

type Props = {
  select: string;
  setSelect: (str: string) => void;
};

const CustomSelect = ({ select, setSelect }: Props) => {
  const handleSelect = (newValue: SingleValue<IOption>) => {
    if (newValue) {
      setSelect(newValue.value);
    } else {
      setSelect('');
    }
  };

  const getValue = () => {
    return select ? options.find((opt) => opt.value === select) : '';
  };

  return (
    <Select
      value={getValue()}
      // @ts-ignore
      onChange={handleSelect}
      className="custom-select-container"
      classNamePrefix="custom-select"
      options={options}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
    />
  );
};
export default CustomSelect;
