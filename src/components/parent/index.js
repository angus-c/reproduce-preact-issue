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
		const ChildComponent = this.childComponents[this.state.childComponentIndex];
		return (
			<div>
				<button onClick={() => this.switch(0)}>Switch to 1</button>
				<button onClick={() => this.switch(1)}>Switch to 3</button>
				<ChildComponent/>
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
			<Comp3 label={'comp2'}/>
    );
  }
}

class Comp2 extends Component {
  render() {
		return (
      <div>
				<Comp3 label={'comp2'}/>
			</div>
    );
  }
}


class Comp3 extends Component {
  render() {
		return (
			<div>
				<div>
					<div>hello1</div>
					<div>hello2</div>
				</div>
				<span>{this.props.label}</span>
			</div>
    );
  }
}
