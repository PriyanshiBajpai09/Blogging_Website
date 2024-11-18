import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #2874f0;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'data:image/jpeg;base64,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';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;