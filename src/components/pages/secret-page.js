import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h2>Your full of secrets page!</h2>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

export default SecretPage;
