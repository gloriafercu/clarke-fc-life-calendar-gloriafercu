import React from 'react';
import './calendar.css';
import {Link} from 'react-router-dom';

class Calendar extends React.Component {
	render() {
		return (
			<section className="calendar">
				<div className="localstorage__container">
					<Link className="link" to={'/'}>
						<button type="button--plus" onClick = {this.props.clicked}>+</button>
					</Link>
					<ul className="emoticon__list">
						{this.props.elements.sort((a,b) => new Date(a.date) - new Date(b.date)).map((entry,index) =>
							<li className="emoticon" key={index}>{entry.option} {entry.date} {entry.message}</li>
						)}
					</ul>
				</div>
			</section>
		);
	}
}

export default Calendar;
