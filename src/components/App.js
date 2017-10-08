import React from 'react';
import PropTypes from 'prop-types';
import ContentArea from '../containers/ContentArea';
import Header from './Header';
import Navigator from './Navigator';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <div className="content-container">
          <Navigator/>
          <div className="middle-content">
            <ContentArea/>
          </div>
          <div className="right-content"></div>
        </div> 
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
