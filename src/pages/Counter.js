import { Box } from "@mui/material";
import Counter from "../components/Counter";
import DecrementButton from "../components/Decrement";
import IncrementButton from "../components/Increment";
import Sidebar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";

const CounterPage = () => {
    return (
        <>
            <Sidebar drawerList={userDrawerList} />
            <Box sx={{ width: "80%", mt: 6, p:10, display: "flex", alignItems: "center" }}>
                <Box sx={{ p: 5, width: "70%", display: "flex", bgcolor: "#b5b69c", }}>
                    <Counter />
                    <Box sx={{ flex: 1, display: "flex", border: "1px solid black", flexDirection: "column", justifyContent: "space-between", p: 4 }}>
                        <IncrementButton />
                        <DecrementButton />
                    </Box>
                </Box>
            </Box>
        </>
    )
};

export default CounterPage;