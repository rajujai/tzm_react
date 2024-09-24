import { Button } from "@mui/material";
import { decrement } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const DecrementButton = () => {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    return <Button sx={{ px: 5, py: 1 }} variant="contained" color="error" onClick={() => dispatch(decrement())} disabled={count < 1}>Decrement Counter By 1</Button>;
}

export default DecrementButton;