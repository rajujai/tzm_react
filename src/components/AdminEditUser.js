import { Button, TextField, Typography } from "@mui/material";
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
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button onClick={saveUser}>Save</Button>
    </>
  );
};

export default AdminEditUser;