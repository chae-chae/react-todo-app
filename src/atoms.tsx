import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "f"],
    Doing: ["c", "d"],
    Done: ["e"],
  },
});
