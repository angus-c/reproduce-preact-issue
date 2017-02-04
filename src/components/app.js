import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Profile from './profile';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: false
		};
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				{!this.state.error && <Profile/>}
			</div>
		);
	}
}
