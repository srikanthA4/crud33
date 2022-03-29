import Listitem from "./Listitem";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://623868a200ed1dbc5ab2754c.mockapi.io/users")
      .then((response) => setUsers(response.data));
  }, [users]);

  return (
    <>
      <h1>User Profiles</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Sr. No.</th>
            <th>Name</th>
            <th>UserId</th>
            <th>User Type</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <Listitem user={user} key={i + 1} count={i + 1} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
