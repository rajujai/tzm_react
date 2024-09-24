import { Box, Typography } from '@mui/material';
import AdminUsers from "../components/AdminUsers";
import Navbar from "../components/Navbar";
import { adminDrawerList } from '../constants/DrawerLists';

const AdminPage = ({ showUsers } = false) => {
    return (
        <>
            <Navbar drawerList={adminDrawerList} />
            <Box sx={{ pt: 10, px: 2, width: "100%" }}>
                {!showUsers && <Typography variant="h6" component="div" sx={{}}>
                    This is Admin
                </Typography>}
                {showUsers && <AdminUsers />}
            </Box>
        </>
    );
};

export default AdminPage;
