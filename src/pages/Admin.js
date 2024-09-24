import { Box, Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import { adminDrawerList } from '../constants/DrawerLists';

const AdminPage = () => {
    return (
        <>
            <Navbar drawerList={adminDrawerList} />
            <Box sx={{ pt: 10, px: 2, width: "100%" }}>
                <Typography variant="h6" component="div" sx={{}}>
                    This is Admin
                </Typography>
            </Box>
        </>
    );
};

export default AdminPage;
