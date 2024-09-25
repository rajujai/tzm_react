import { Box } from "@mui/material";
import AdminUsers from "../components/AdminUsers";
import Navbar from "../components/Navbar";
import { adminDrawerList } from "../constants/DrawerLists";

const UsersPage = () => {
    return (
        <Navbar drawerList={adminDrawerList}>
            <Box p={2}>
                <AdminUsers />
            </Box>
        </Navbar>
    )
}

export default UsersPage;
