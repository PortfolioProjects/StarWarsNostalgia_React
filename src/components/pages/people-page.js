import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../starwars-components';
import Row from '../row';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <React.Fragment>
      <h2 className="headline">People</h2>
      <Row
        left={<PersonList onItemSelected={id => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </React.Fragment>
  );
};

export default withRouter(PeoplePage);
