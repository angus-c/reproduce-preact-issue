import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	render({throwError}) {
		return (
			<div class={style.profile.x.y}>
				<h1>Profile.</h1>
				<p>This is the profile page</p>
				<button onclick={throwError}>{'Throw Error'}</button>
			</div>
		);
	}
}
