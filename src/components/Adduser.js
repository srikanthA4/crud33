import { useState } from "react";
import { Form, FormSelect, FloatingLabel, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    userId: "",
    accountType: "",
    city: "",
    id: "",
  });

  const navigate = useNavigate();

  // defining a function to take input from user
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    // Update the user to API
    axios.post("https://623868a200ed1dbc5ab2754c.mockapi.io/users", user);
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
        <Button onClick={addHandler}>Add</Button>
      </Form>
    </Container>
  );
};

export default Adduser;
