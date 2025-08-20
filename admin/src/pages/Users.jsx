import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Users = ({ token }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/users`, {
        headers: { token },
      });
      if (res.data.success) {
        setUsers(res.data.users);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/admin/delete-user`,
        { userId },
        { headers: { token } }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        fetchUsers();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  return (
    <div>
      <h3>All Users</h3>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;