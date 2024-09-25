import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";
import { useAuth } from "../context/AuthContext";

const UserPage = () => {
    const { auth } = useAuth();
    return (
        <Navbar drawerList={userDrawerList}>
            <Typography variant="h6" component="div">
                Hello {auth.currentUser ? auth.currentUser.name ? auth.currentUser.name : auth.currentUser.email : "User"}
            </Typography>
        </Navbar>
    );
};

export default UserPage;