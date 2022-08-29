type typeObj = {
  [key: string]: boolean;
};

export const isPangram = (phrase: string): boolean => {
  const myObj: typeObj = {};
  for (const letter of phrase) {
    if (letter.length && letter.match(/[a-z]/i))
      myObj[`${letter.toLowerCase()}`] = true;
  }

  return Object.keys(myObj).length === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
import { CityInfo } from 'store/employees';
import { DefaultOptionType } from 'rc-tree-select/lib/TreeSelect';

type Props = {
  selectedValues: number[];
  resetSelectedValues: () => void;
  setAllSelectedValues: () => void;
  cities: CityInfo[];
};

export const getTreeData = ({
  selectedValues,
  resetSelectedValues,
  setAllSelectedValues,
  cities,
}: Props): DefaultOptionType[] => {
  const data = cities.map((item) => ({
    value: item.id,
    title: item.name,
  }));

  return [
    {
      title:
        selectedValues.length > 0 ? (
          <span
            onClick={resetSelectedValues}
            style={{
              color: '#286FBE',
              cursor: 'pointer',
            }}
          >
            Убрать все
          </span>
        ) : (
          <span
            onClick={setAllSelectedValues}
            style={{
              color: '#286FBE',
              cursor: 'pointer',
            }}
          >
            Выбрать все
          </span>
        ),
      checkable: false,
      value: 0,
    },
    ...data,
  ];
};
