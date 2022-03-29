import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Userlistitem from "./Userlistitem";
const Teacherlist = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://623868a200ed1dbc5ab2754c.mockapi.io/users")
      .then((response) => setUsers(response.data));
  }, [users]);
  const teachers = users.filter((user) => user.accountType === "Teacher");
  return (
    <>
      <h1>List of Teachers</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <td>Sr. No.</td>
            <td>User</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {teachers.map((user, i) => (
            <Userlistitem user={user} key={i + 1} count={i + 1} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Teacherlist;
