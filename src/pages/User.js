import Sidebar from "../components/Navbar";
import { userDrawerList } from "../constants/DrawerLists";

const UserPage = () => {
    return (
        <>
            <Sidebar drawerList={userDrawerList} />
        </>
    );
};

export default UserPage;