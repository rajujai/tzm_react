import CalculateIcon from '@mui/icons-material/Calculate';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';

export const userDrawerList = [
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
    { text: 'Counter', icon: <CalculateIcon />, path: '/home/user/counter' }
];


export const adminDrawerList = [
    { text: 'Home', icon: <HomeIcon />, path: '/home/admin' },
    { text: 'Users', icon: <GroupIcon />, path: '/home/admin/users' }
];