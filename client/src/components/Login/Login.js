import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, FormGroup, FormControl, Button, InputLabel, Input, CircularProgress } from "@material-ui/core";
import './Login.css';
import { login } from '../../actions/users';

const Login = () => {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { loading, error, isLogged } = useSelector(state => state.users);

    if (isLogged) {
        navigate("/post");
    }
    const onSubmit = () => {
        if (!email) {
            alert('Fill up email!');
            return;
        }

        dispatch(login(email));
    }

    return (
        <div className='login-page'>
            {loading ? <CircularProgress /> : (
                <Container className='login-container'>
                    <FormGroup>
                        <h1>Login</h1>
                        <FormControl
                        >
                            <InputLabel htmlFor="email-input">Email address</InputLabel>
                            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required id="email-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <hr />
                        <Button color='primary' variant='contained' onClick={onSubmit}>Login</Button>
                    </FormGroup>
                </Container>
            )}

        </div>
    )
}

export default Login;