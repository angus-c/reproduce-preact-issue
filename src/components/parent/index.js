import { h, Component } from 'preact';
import style from './style';

export default class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			childComponentIndex: 1
		};

		this.childComponents = [Comp1, Comp2];
	}

	render() {
		const ChildComponent = this.childComponents[this.state.childComponentIndex - 1];
		return (
			<div>
				<button onClick={() => this.switch(1)}>Switch to 1</button>
				<button onClick={() => this.switch(2)}>Switch to 2</button>
				<ChildComponent names={this.state.names} />
			</div>
		);
	}

	switch(index) {
		this.setState({childComponentIndex: index});
	}
}

class Comp1 extends Component {
  render() {
		return (
      <div>{'Comp1'}</div>
    );
  }
}

class Comp2 extends Component {
  render() {
		return (
			<div>
				<Comp3>
					<Comp4 key={1}>{'child'}</Comp4>
				</Comp3>
			</div>
    );
  }
}

class Comp3 extends Component {
  render() {
		return (
			<div>
				{this.props.children}
				<Comp4 key={1}>{'inline'}</Comp4>
			</div>
    );
  }
}

class Comp4 extends Component {
  render() {
		return (
			<div>
				{('' + Date.now()).substr(-3)}
				{' '}
				{this.props.children}
			</div>
		);
  }
}
