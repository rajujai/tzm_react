import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminEditUser from "./AdminEditUser";

const font = { fontSize: { xs: ".5rem", sm: ".6rem", md: ".8rem", lg: "1rem", xl: "1.2rem" } };

const AdminUsers = () => {
  const [editing, setEditing] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = localStorage.getItem("users");
    if (users) setUsers(JSON.parse(users));
    else {
      const usersList = [
        { id: 1, name: "John Doe", email: "john@example.com", domain: "Developer" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", domain: "Developer" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", domain: "Developer" },
      ];
      localStorage.setItem("users", JSON.stringify(usersList));
      setUsers(usersList);
    }
  }, []);

  const handleEditUser = (user) => {
    setEditing(true);
    setEditUser(user);
  };

  const updateUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditing(false);
    setEditUser(null);
  };
  return (
    editing ? <AdminEditUser user={editUser} _updateUser={updateUser} /> :
      <>
        <Typography variant="h2">Users</Typography>
        <Box sx={font} width={"100%"} height={"70vh"} bgcolor={"#b5b69c"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"space-between"} p={2} bgcolor={"#3498db"}>
              <Typography flex={3} variant="div">Name</Typography>
              <Typography flex={4} variant="div">Email</Typography>
              <Typography flex={2} variant="div">Domain</Typography>
              <Typography flex={2} variant="div">Action</Typography>
            </Box>
            {users.map((user) => (
              <Box key={user.id} display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2} bgcolor={"#fff"}>
                <Typography flex={3} variant="div">{user.name}</Typography>
                <Typography flex={4} variant="div">{user.email}</Typography>
                <Typography flex={2} variant="div">{user.domain}</Typography>
                <Typography flex={2} variant="div">
                  <Button sx={font} onClick={() => handleEditUser(user)}>
                    <EditIcon sx={font} /> Edit
                  </Button>
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </>
  );
};

export default AdminUsers;