import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export function isLoggedIn() {
    const sessionId = Cookies.get('sessionid');
    return !!sessionId; // Returns true if sessionId exists, false otherwise
}
  


export function LoginForm() {
    const navigate = useNavigate();

    const HandleLogin = () => {
        const emailField = document.getElementById('email-field').value;
        const passwordField = document.getElementById('password-field').value;

        axios
            .post('http://localhost:8000/api/login', {
                email: emailField,
                password: passwordField,
            })
            .then(response => {
                const sessionId = response.data.session_id;
                if (!!sessionId) {
                    Cookies.set('sessionid', sessionId, { sameSite: 'none', secure: true });
                    navigate('/meta');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader> Login </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" placeholder="Enter email" id="email-field" />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" placeholder="Enter password" id="password-field" />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button onClick={HandleLogin}>
                Login
            </Button>
            </ModalFooter>
        </Modal>
    );
}

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('sessionid');
    navigate('/meta/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
