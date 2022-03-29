import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Listitem({ user, count }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://623868a200ed1dbc5ab2754c.mockapi.io/users")
      .then((response) => setUsers(response.data.reverse()));
  }, [users]);

  const deleteHandler = () => {
    axios.delete(
      `https://623868a200ed1dbc5ab2754c.mockapi.io/users/${user.id}`
    );
  };
  return (
    <tr className="text-center">
      <td>{count}</td>
      <td>{user.name}</td>
      <td>
        <Link to={`/Edit/${user.id}`}>
          <EditIcon />
        </Link>
        <IconButton onClick={deleteHandler} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
}
