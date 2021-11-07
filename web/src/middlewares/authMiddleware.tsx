import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';
import HashLoader from 'react-spinners/HashLoader'

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, checking } = useAuth();
  const location = useLocation();

  if (checking) {
    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <HashLoader color='#835afd' size={50} loading={checking} />
      </div>
    )
  }

  if (!user && !checking) {
    return <Navigate to='/' state={{ from: location }} />
  }

  return children;
}

export default ProtectedRoute;