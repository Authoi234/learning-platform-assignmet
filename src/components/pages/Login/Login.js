import React, { useContext, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { loginWithProvider, logIn } = useContext(AuthContext);

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        loginWithProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = (event) => {
        event.preventDefault();
        loginWithProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        event.preventDefault();

        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-purple-200 mt-16">
            <Container>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Welcome Back!</h1>
                        <p className="py-6">Please Login now to get access</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" name='email' placeholder="Please Enter Your Email" required/>
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="Password" name='password' placeholder="Please Enter Your Password" required/>
                                </FloatingLabel>
                            </div>
                            <Form.Text>
                                Dont have an account? <Link to={'/register'}>Register</Link>
                            </Form.Text>
                            <div className="form-control mt-2">
                                <button type='submit' className="btn btn-primary px-5">Login</button>
                                <Form.Text className='text-danger'>
                                    {error}
                                </Form.Text>
                            </div>
                        </form>
                        <button className="btn btn-outline-primary mt-2" onClick={handleGoogleSignIn}>Login Via Google</button>
                        <button className="btn btn-outline-danger mt-2" onClick={handleGithubSignIn}>Login Via Github</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;