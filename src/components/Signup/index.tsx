import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import "./styles.scss";

type SignupProps = {
  setToken: (arg: string) => void;
};
const Signup = ({ setToken }: SignupProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [setSignup] = useMutation(SIGNUP_MUTATION, {
    variables: { password, email, name },
  });

  const history = useHistory();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignup()
      .then((res) => {
        console.log(res);
        setToken(res.data.register.id); // This will trigger a re-render, we'll catch + reroute signup page w/credentials to our main dashboard
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  return (
    <div className="signup-wrapper">
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="primary" size="sm" onClick={() => history.push("/")}>
        I already have an account
      </Button>
      {error && (
        <div className="error">There was a problem signing you up.</div>
      )}
    </div>
  );
};

export default Signup;