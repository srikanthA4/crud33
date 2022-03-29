import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Userlistitem from "./Userlistitem";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://623868a200ed1dbc5ab2754c.mockapi.io/users")
      .then((response) => setUsers(response.data));
  }, [users]);
  return (
    <>
      <h1>List of Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <td>Sr. No.</td>
            <td>User</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <Userlistitem user={user} key={i + 1} count={i + 1} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
