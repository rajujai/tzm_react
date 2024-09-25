import AdminUsers from "../components/AdminUsers";
import Navbar from "../components/Navbar";
import { adminDrawerList } from "../constants/DrawerLists";

const UsersPage = () => {
    return (
        <Navbar drawerList={adminDrawerList}>
            <AdminUsers />
        </Navbar>
    )
}

export default UsersPage;
