import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const minState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const min = get(minState);
    return min / 60;
  },
  set: ({ set }, newValue) => {
    const min = Number(newValue) * 60;
    set(minState, min);
  },
});
