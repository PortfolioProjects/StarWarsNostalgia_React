import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../starwars-components';
import Row from '../row';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <React.Fragment>
        <h2 className="headline">Planets</h2>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </React.Fragment>
    );
  }
}
