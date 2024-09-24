import { useEffect, useState } from "react";
import AdminEditUser from "./AdminEditUser";

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
    <>
      <div>
        <h2>Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.domain}
              <button onClick={() => handleEditUser(user)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      {editing && <AdminEditUser user={editUser} _updateUser={updateUser} />}
    </>
  );
};

export default AdminUsers;