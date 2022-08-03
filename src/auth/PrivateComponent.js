import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from './firebase';
import Loader from '../components/Loader'

const PrivateComponent = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/login"/>;
  }

  if(user && !loginOnly) {
    return <Navigate to="/"/>;
  }
  
  return isLoading ? <Loader/> : children;
};

export default PrivateComponent;
