import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Form, FormSelect, FloatingLabel, Container } from "react-bootstrap";

const Edituser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    userId: "",
    accountType: "",
    city: "",
    id: "",
  });
  const navigate = useNavigate();

  //useEffect hook to render on change of id
  useEffect(() => {
    axios
      .get(`https://623868a200ed1dbc5ab2754c.mockapi.io/users/${id}`)
      .then((response) => setUser(response.data));
  }, [id]);

  // OnInput function to take input from user
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editHandler = (e) => {
    e.preventDefault();
    // Update the user to API
    axios.put(`https://623868a200ed1dbc5ab2754c.mockapi.io/users/${id}`, user);
    //navigating back to Home
    navigate("/");
  };

  return (
    <Container style={{ marginTop: 10 }}>
      <Form>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            value={user.name}
            name="name"
            onChange={(e) => inputHandler(e)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="User Id"
          className="mb-3"
        >
          <Form.Control
            value={user.userId}
            name="userId"
            onChange={(e) => inputHandler(e)}
          />
        </FloatingLabel>
        <FormSelect
          style={{ marginTop: 10, marginBottom: 10, padding: 14 }}
          className="mb-3"
          id="outlined-required"
          label="User Type"
          value={user.accountType}
          name="accountType"
          onChange={(e) => inputHandler(e)}
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </FormSelect>
        <FloatingLabel
          controlId="floatingInput"
          label="City"
          value={user.city}
          name="city"
          onChange={(e) => inputHandler(e)}
          className="mb-3"
        >
          <Form.Control
            value={user.city}
            name="city"
            onChange={(e) => inputHandler(e)}
          />
        </FloatingLabel>
        <Button onClick={editHandler}>Edit</Button>
      </Form>
    </Container>
  );
};

export default Edituser;
