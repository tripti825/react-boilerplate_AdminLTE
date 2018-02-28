import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import CountryPage from 'components/Country';
import { countryActions } from './action';
import { country }        from './selector';
import { generatePacket } from 'utils/helpers/request';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

class Country extends Component {
  constructor(props) {
    super(props);

    let packet = generatePacket({});

    this.props.getcountry(packet);
  }

  render() {
    const { country } = this.props;
    
    return(
      <div>
        {country.items && country.items.status === 'success'? <CountryPage messages={messages} list={country.items.country_list} />: null}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  country: country(),
});

const mapDispatchToProps = {
  getcountry: countryActions.country
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'country', reducer });
const withSaga = injectSaga({ key: 'country', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Country);