import React from "react";

const getSavedValue = (key: string, initialValue: Todo[]): Todo[] => {
  const savedValue = JSON.parse(localStorage.getItem(key) || '[]');
  if (savedValue) return savedValue;
  return initialValue;
};

export const useLocalStorage = (key: string, initialValue: Todo[]): [Todo[], React.Dispatch<React.SetStateAction<Todo[]>>] => {
  const [value, setValue] = React.useState(() => {
    return getSavedValue(key, initialValue);
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};