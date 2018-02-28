import injectSaga     from 'utils/injectSaga';
import injectReducer  from 'utils/injectReducer';
import { generatePacket } from 'utils/helpers/request';
import Level         from 'components/Level2';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { level2Actions } from './action';
import { authentication, alert, level2 } from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

class Level2 extends Component {
  constructor(props) {
    super(props);

    let packet = generatePacket({});

    this.props.getdata(packet);
  }

  render() {
    const { level2 } = this.props;
    
  return(
      <div>
        {level2.items && level2.items.status === 'success'? <Level messages={messages} list={level2.items.response} />: null}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  level2: level2()
});

const mapDispatchToProps = {
  getdata: level2Actions.getdata
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'level2', reducer });
const withSaga = injectSaga({ key: 'level2', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Level2);