import { atom } from 'recoil';

export const alertsAtom = atom({
  key: 'alertsAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const sensorsAtom = atom({
  key: 'sensorsAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const checkedSensorsAtom = atom({
  key: 'checkedSensorsAtom',
  default: [],
});

export const invokeNewFetchAtom = atom({
  key: 'invokeNewFetchAtom',
  default: false,
});

export const loadingStateAtom = atom({
  key: 'loadingStateAtom',
  default: false,
});
