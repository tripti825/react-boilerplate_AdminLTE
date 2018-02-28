import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Country extends Component {
  
  render() {
    const {list, messages}    = this.props;
    const maplist = list.map((country) => 
      <ListItem key={country.id}
              countryName={country.CountryName}
              countryCapital={country.countryCapital}
              countryCodeISO2={country.countryCodeISO2} />
      )
    return(
      <table>
      <thead>
      <tr>
        <th><FormattedMessage {...messages.countryTableFirstColumn} /></th>
        <th><FormattedMessage {...messages.countryTableSecondColumn} /></th>
        <th><FormattedMessage {...messages.countryTableThirdColumn} /></th>
      </tr>
      </thead>
      <tbody>
        {maplist}
      </tbody>
      
      </table>
    )

    function ListItem(props) {
      return (<tr><td>{props.countryName}</td>
              <td>{props.countryCapital}</td>
              <td>{props.countryCodeISO2}</td></tr>);
    }
  }
}

export default Country;