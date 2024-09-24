import { Button } from "@mui/material";
import { decrement, increment } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "../styles/common.css";

const UserCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="top-gap">
      <h2>Counter: {count}</h2>
      <Button variant="contained" onClick={() => dispatch(increment())} disabled={count >= 10}>Increment Counter By 2</Button>
      <Button variant="contained" color="error" onClick={() => dispatch(decrement())} disabled={count <= 1}>Decrement Counter By 1</Button>
    </div>
  );
};

export default UserCounter;
