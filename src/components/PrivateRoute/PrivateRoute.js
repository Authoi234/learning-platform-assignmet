import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

    if (loading) {
        return <div style={{ textAlign: 'center', fontSize: '30px ' }}>
            <Spinner animation="border" variant="danger" />
        </div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;