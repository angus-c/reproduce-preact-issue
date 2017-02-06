import { h, Component } from 'preact';
import Profile from './profile';
export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: true
		};

		window.onerror = () => {
			this.setState({
				error: false
			});
		};
	}

	throwError = e => {
		throw new Error('error generated');
	};

	render() {
		console.log('this.state.error', this.state.error);
		return (
			<div id="app">
				{this.state.error ?
					<div>{'error, please refresh'}</div> :
					<Profile throwError={this.throwError}/>
				}
			</div>
		);
	}
}
