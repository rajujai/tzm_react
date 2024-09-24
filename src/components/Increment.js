import { Button } from "@mui/material";
import { increment } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const IncrementButton = () => {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    return <Button sx={{ px: 5, py: 1 }} variant="contained" onClick={() => dispatch(increment())} disabled={count > 10}>Increment Counter By 2</Button>;
}

export default IncrementButton;