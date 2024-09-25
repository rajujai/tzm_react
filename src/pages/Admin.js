import { Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import { adminDrawerList } from '../constants/DrawerLists';

const AdminPage = () => {
    return (
        <Navbar drawerList={adminDrawerList}>
            <Typography variant="h6" component="div">
                This is Admin
            </Typography>
        </Navbar>
    );
};

export default AdminPage;
