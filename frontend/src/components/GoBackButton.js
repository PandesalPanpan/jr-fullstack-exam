import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  return (
    <button type="button" className="btn btn-secondary ml-2" onClick={handleGoBack}>
      Go back
    </button>
  );
}

export default GoBackButton;