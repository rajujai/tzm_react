import { Box } from "@mui/material";
import Counter from "../components/Counter";
import DecrementButton from "../components/Decrement";
import IncrementButton from "../components/Increment";
import Navbar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";

const CounterPage = () => {
    return (
        <Navbar drawerList={userDrawerList} >
            <Box sx={{ p: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ p: 10, width: "70%", display: "flex", bgcolor: "#b5b69c", gap: 5 }}>
                    <Counter />
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2 }}>
                        <IncrementButton />
                        <DecrementButton />
                    </Box>
                </Box>
            </Box>
        </Navbar>
    )
};

export default CounterPage;