import React, { Component } from 'react';

import Landingpage from 'components/Landing';
import messages from './messages';

class Landing extends Component {
  
  render() {
    return(
      <Landingpage messages={messages}/>
    )
  }
}

export default Landing;

