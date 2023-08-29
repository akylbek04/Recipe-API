import { useState } from "react";
import "./Login.css";
import { Form, FormGroup, Label, Button, Col, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email : '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(credentials.email && credentials.password){
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      navigate("/")
    }
    
  }


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({...credentials, [name]: value})
  }


  return (
    <div className="row">
      <Form onSubmit={handleSubmit} className="col-sm-4 text-left m-5 p-4 mx-auto border border-secondary-subtle login">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password "
            type="password"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup check row className="m-0 p-0">
          <Button  className="d-grid">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
