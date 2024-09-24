import { Box } from "@mui/material";
import AdminUsers from "../components/AdminUsers";
import Navbar from "../components/Navbar";
import { adminDrawerList } from "../constants/DrawerLists";

const UsersPage = () => {
    return (
        <>
            <Navbar drawerList={adminDrawerList} />
            <Box width={"90%"} mt={6} p={5}>
                <AdminUsers />
            </Box>
        </>
    )
}

export default UsersPage;
