import React, {useState} from 'react';
import css from "./login.module.css"
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {loginAction} from "../../store/actions/authAction";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handlerSubmit = (e) => {
        console.log(email,password)
        e.preventDefault()
        dispatch(loginAction(email,password))
    }

    return (
        <div className={css.loginBox}>
            <Card className="text-center">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Form onSubmit={handlerSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}
                                              onChange={e => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;