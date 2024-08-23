import { useNavigate } from 'react-router-dom';

function useLogout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return {
    handleLogout,
  };
}

export default useLogout;