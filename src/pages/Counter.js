import { Box, Grid2 as Grid } from "@mui/material";
import Counter from "../components/Counter";
import DecrementButton from "../components/Decrement";
import IncrementButton from "../components/Increment";
import Navbar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";

const CounterPage = () => {

    return (
        <Navbar drawerList={userDrawerList} >
            <Box p={2} maxWidth={"1080px"}>
                <Grid container spacing={2} sx={{ p: "5%", bgcolor: "#b5b69c" }}>
                    <Grid container xs={2} md={1} flexGrow={1} bgcolor={"#fff"} height={"150px"} display={"flex"}
                        justifyContent={"center"}>
                        <Counter />
                    </Grid>
                    <Grid container p="2%" >
                        <Grid container width={"100%"}>
                            <IncrementButton />
                        </Grid>
                        <Grid container width={"100%"}>
                            <DecrementButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Navbar>
    )
};

export default CounterPage;