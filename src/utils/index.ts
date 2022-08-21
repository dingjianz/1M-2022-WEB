import { useEffect, useState } from "react";

export const useDebounce: (
  value: ITodo.IParam,
  delay?: number
) => ITodo.IParam = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export const useArray = <T>(value: T[]) => {
  const [array, setArray] = useState<T[]>(value);
  const add = (item: T) => {
    // setArray(preArr => [...preArr, item])
    setArray([...array, item]);
  };
  const removeIndex = (index: number) => {
    const copy = [...array];
    copy.splice(index, 1);
    setArray(copy);
  };

  const clearAll = () => {
    setArray([]);
  };

  return {
    value: array,
    clearAll,
    add,
    removeIndex,
  };
};
