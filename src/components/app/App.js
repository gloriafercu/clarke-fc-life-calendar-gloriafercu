import React from 'react';
import Editor from '../editor/Editor';
import Calendar from '../calendar/Calendar';
import faceSad from './../../images/saddy.svg';
import face from './../../images/happiness.svg';
import {Route, Switch} from 'react-router-dom';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			entries: []
		};
	}

	handleChangeRadio(e) {
		const sad = document.querySelector('.status__sad');
		if (sad.checked) {
			document.querySelector('.message').disabled = true;
		} else {
			document.querySelector('.message').disabled = false;
		}
	}

	handleChange(e) {
		const date = document.querySelector('input[name="date"]').value;
		const option = document.querySelector('input[name="options"]:checked').value;
		const message = document.querySelector('.message').value;

		const entry = {
			"date": date,
			"option": option,
			"message": message
		};

		if (localStorage.getItem('all entries') == null) {
			const entries = [];
			entries.push(entry);
			localStorage.setItem('all entries', JSON.stringify(entries));
		} else {
			const entries = JSON.parse(localStorage.getItem('all entries'));
			entries.push(entry);
			localStorage.setItem('all entries', JSON.stringify(entries));
		}

		this.setState({
			entries: JSON.parse(localStorage.getItem('all entries'))
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img className="smile__header" src={faceSad} alt="smile-sad" />
					<h1 className="App-title">Life Calendar</h1>
					<img className="smile__header" src={face} alt="smile-happy" />
				</header>
				<main className="wrapper">
					<Switch>
						<Route exact path='/' render={() => <Editor clicked = {this.handleChange} selected = {this.handleChangeRadio} />} />
						<Route path='/calendar' render={() => <Calendar elements = {this.state.entries} />} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
