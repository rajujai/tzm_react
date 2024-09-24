import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AdminEditUser = ({ user, _updateUser }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [domain, setDomain] = useState(user.domain);

  const saveUser = () => {
    if (name && email && domain) {
      _updateUser({ id: user.id, name, email, domain });
    } else {
      setError("Please fill all fields");
    }
  };

  return (
    <>
      <Typography variant="h4">Edit User</Typography>
      <Box width={"90%"} display={"flex"} p={4} gap={2} flexDirection={"column"} bgcolor={"#cdd4d8"}>
        <Box width={"80%"} gap={5} px={5} alignItems={"center"} display={"flex"} flexDirection={"row"} >
          <Typography width={"30%"} variant="h5">Name</Typography>
          <TextField fullWidth sx={{ bgcolor: "#fff" }} value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
        <Box width={"80%"} gap={5} px={5} alignItems={"center"} display={"flex"} flexDirection={"row"} >
          <Typography width={"30%"} variant="h5">Email</Typography>
          <TextField fullWidth sx={{ bgcolor: "#fff" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box width={"80%"} gap={5} px={5} alignItems={"center"} display={"flex"} flexDirection={"row"} >
          <Typography width={"30%"} variant="h5">Domain</Typography>
          <TextField fullWidth sx={{ bgcolor: "#fff" }} value={domain} onChange={(e) => setDomain(e.target.value)} />
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Button onClick={saveUser}>Save</Button>
      </Box>
    </>
  );
};

export default AdminEditUser;