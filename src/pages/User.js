import CalculateIcon from '@mui/icons-material/Calculate';
import HomeIcon from '@mui/icons-material/Home';
import Sidebar from "../components/Navbar";
import UserCounter from "../components/UserCounter";

const UserPage = ({ showCounter } = false) => {
    const drawerList = [
        { text: 'Home', icon: <HomeIcon />, path: '/home' },
        { text: 'Counter', icon: <CalculateIcon />, path: '/home/user/counter' }
    ];
    return (
        <>
            <Sidebar drawerList={drawerList} />
            {showCounter && <UserCounter />}
        </>
    );
};

export default UserPage;