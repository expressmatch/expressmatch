import React from 'react';
import { Link } from 'react-router-dom';
import {history} from '../store/configureStore';

class Navigator extends React.Component{

	constructor(props){
		super(props);

		this.navigate = this.navigate.bind(this);
	}

	navigate(e){
		switch(true){
			case !!(e.target.classList.contains("post")):
				history.push('/post'); //TODO: Move to Redux Lifecycle
				break;

			case !!(e.target.classList.contains("proposals")):
				history.push('/');
				break;

			case !!(e.target.classList.contains("logout")):
				history.push('#');
				break;

			default:
				
		}
	}

	render(){
		return (
			<div className="navigator">
				<div className="nav-container">
			    	<ul className="nav-items" onClick={this.navigate}>
			    		<li className="selected post">Express</li>
			    		<li className="proposals">Proposals</li>
			    		<li className="logout">Logout</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Navigator;
