import React, { useContext, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate('/');

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(password, name, photoURL, email);

        createUser(email, password)
            .then(res => {
                handleUpdateUserProfile(name, photoURL);
                const user = res.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(e => {
                setError(e.message);
            });

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { console.log() })
            .catch((err) => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-purple-200 mt-16">
            <Container>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Welcome!</h1>
                        <p className="py-6">Please Register now to get access</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" name='name' placeholder="Please Enter Your Name" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Photo URL"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" name='photoURL' placeholder="Please Enter Your Photo URL" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" name='email' placeholder="Please Enter Your Email" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="Password" name='password' placeholder="Please Enter Your Password" required />
                                </FloatingLabel>
                            </div>
                            <Form.Text>
                                Already have an Account? <Link to={'/login'}>Login</Link>
                            </Form.Text>
                            <div className="form-control mt-2">
                                <button type='submit' className="btn btn-primary px-5">Register</button>
                                <Form.Text className='text-danger'>
                                    {error}
                                </Form.Text>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;