import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const categoryObj = {
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
};

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

// export interface ICategory {
//   text: string,
// }

export const categoryState = atom({
  key: "category",
  default: Categories.TO_DO,
});

// export const categoryState = atom<ICategory[]>({
//   key: "category",
//   default: [],
// })

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
