import React from 'react';
import Editor from '../editor/Editor';
import Calendar from '../calendar/Calendar';
import pencil from './../../images/pencil.svg';
import face from './../../images/happy.svg';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			entries: []
		};
	}

	handleClick() {
		const valueName = document.querySelector('.name').value;
		const valueSurname = document.querySelector('.surname').value;

		const entry = {
			"name": valueName,
			"surname": valueSurname
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
          <h1 className="App-title">Life Calendar</h1>
					<img className="pencil" src={pencil} alt="pencil" />
					<img className="smile__header" src={face} alt="smile" />
        </header>
				<main className="wrapper">
					<Editor clicked = { this.handleClick } />
					<Calendar elements = { this.state.entries }/>
				</main>
      </div>
    );
  }
}

export default App;
