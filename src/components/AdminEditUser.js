import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const font = { fontSize: { xs: ".5rem", sm: ".6rem", md: ".8rem", lg: "1rem", xl: "1.2rem" } };
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
      <Box bgcolor={"#cdd4d8"} display={"flex"} flexDirection={"column"}>
        <Box sx={font} display={"flex"} p={"4%"} flexDirection={"row"} bgcolor={"#cdd4d8"} justifyContent={"space-between"}>
          <Box gap={5} px={"5%"} width={"30%"} justifyContent={"space-evenly"} display={"flex"} flexDirection={"column"}>
            <Typography>Name</Typography>
            <Typography>Email</Typography>
            <Typography>Domain</Typography>
          </Box>
          <Box gap={2} px={"5%"} width={"70%"} display={"flex"} flexDirection={"column"} >
            <TextField sx={{ bgcolor: "#fff" }} value={name} onChange={(e) => setName(e.target.value)} />
            <TextField sx={{ bgcolor: "#fff" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField sx={{ bgcolor: "#fff" }} value={domain} onChange={(e) => setDomain(e.target.value)} />
          </Box>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"} pr={"9%"} pb={"4%"}>
          <Button variant="contained" onClick={saveUser}>Save</Button>
        </Box>
      </Box>
    </>
  );
};

export default AdminEditUser;