import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";
import { useAuth } from "../context/AuthContext";

const UserPage = () => {
    const { auth } = useAuth();
    return (
        <>
            <Sidebar drawerList={userDrawerList} />
            <Box pt={10} width={"100%"} pl={4}>
                <Typography variant="h6" component="div" sx={{}}>
                    Hello {auth.currentUser.name ? auth.currentUser.name : auth.currentUser.email}
                </Typography>
            </Box>
        </>
    );
};

export default UserPage;