import { useRecoilState } from "recoil";
import { hourSelector, minState } from "./atoms";

function App() {
  const [min, setMin] = useRecoilState(minState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMin(+event.currentTarget.value); // + : str to num
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value); // + : str to num
  };
  return (
    <div>
      <input
        value={min}
        onChange={onMinChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHourChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
