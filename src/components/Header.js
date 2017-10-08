import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
    	<div className="left-area"></div>
    	<div className="main-area">
    		<div className="app-header">
    			<Link to="/">Express Match</Link>
    		</div>
    	</div>
    	<div className="right-area"></div>
    </div>
  );
};

export default Header;
