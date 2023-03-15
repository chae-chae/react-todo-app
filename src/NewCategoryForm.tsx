import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toDoState, ITodo } from "./atoms";

function NewCategoryForm() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const setToDoState = useSetRecoilState(toDoState);

  const handleNewCategorySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newCategoryName) return;
    const newCategory: ITodo[] = [];
    setToDoState((oldState) => ({
      ...oldState,
      [newCategoryName]: newCategory,
    }));
    setNewCategoryName("");
  };

  return (
    <form onSubmit={handleNewCategorySubmit}>
      <input
        type="text"
        placeholder="New category name"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
}

export default NewCategoryForm;
