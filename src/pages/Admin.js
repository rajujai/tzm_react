import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography } from '@mui/material';
import AdminUsers from "../components/AdminUsers";
import Navbar from "../components/Navbar";
const AdminPage = ({ showUsers } = false) => {
    const drawerList = [
        { text: 'Home', icon: <HomeIcon />, path: '/home/admin' },
        { text: 'Users', icon: <GroupIcon />, path: '/home/admin/users' }
    ];
    return (
        <>
            <Navbar drawerList={drawerList} />
            <Box sx={{pt: 10, width: "100%"}}>
                <Typography variant="h6" component="div" sx={{textAlign: "left"}}>
                    This is Admin
                </Typography>
                {showUsers && <AdminUsers />}
            </Box>
        </>
    );
};

export default AdminPage;
