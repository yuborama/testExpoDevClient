import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { GetState } from 'zustand';
import { persist } from 'zustand/middleware';

type set<T> = (
  partial: object | ((state: T & object) => T & object),
  replace?: boolean | undefined
) => void;
type get<T> = GetState<T & object>;

type envoldedProps<T> = {
  key: string;
  function: (set: set<T>, get: get<T>) => T & object;
};

function useWithStorage<T>(props: envoldedProps<T>) {
  const State = create(
    persist<T & object>(props.function, {
      name: props.key, // unique name
      getStorage: () => AsyncStorage, // (optional) by default, 'localStorage' is used
    })
  );
  return State;
}
export default useWithStorage;
