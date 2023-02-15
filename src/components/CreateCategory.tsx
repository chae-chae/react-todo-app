import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

interface ICat {
  category: string[];
}

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categoryState);
  //   const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  console.log("check categorystate", categoryState);
  const handleValid = ({ category }: IForm) => {
    console.log("typed new cat ", category);
    // setCategories();
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "write a new category plz",
        })}
        placeholder="Add new category"
      />
      <button>Add</button>
      <hr />
    </form>
  );
}
export default CreateCategory;
