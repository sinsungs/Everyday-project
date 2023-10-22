import { atom, RecoilRoot, useRecoilState } from 'recoil';

export const habitsState = atom({
  key: 'habitsState',
  default: [],
});