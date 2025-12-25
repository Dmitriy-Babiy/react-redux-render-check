import { Counter } from "./app/components";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./app/counterSlice";
import type { RootState } from "./app/store";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <Counter
        value={counter}
        increment={() => dispatch(increment())}
        decrement={() => dispatch(decrement())}
      />
    </>
  );
}

export default App;
