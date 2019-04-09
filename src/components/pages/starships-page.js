import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../starwars-components';

const StarshipsPage = ({ history }) => {
  return (
    <React.Fragment>
      <h2 className="headline">Starships</h2>
      <StarshipList onItemSelected={id => history.push(id)} />
    </React.Fragment>
  );
};

export default withRouter(StarshipsPage);
