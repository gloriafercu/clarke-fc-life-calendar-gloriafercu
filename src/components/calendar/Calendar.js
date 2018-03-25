import React from 'react';
import './calendar.css';
import {Link} from 'react-router-dom';

class Calendar extends React.Component {
	render() {
		return (
			<section className="calendar">
				<div className="localstorage__container">
					<Link className="link" to={'/'}>
						<button type="button" className="button--plus" onClick = {this.props.clicked}>+</button>
					</Link>
					<ul className="emoticon__list">
						{this.props.elements.sort((a,b) => new Date(a.date) - new Date(b.date)).map((entry,index) =>
							<li key={index}>
								<div className={`emoticon-${entry.option}`}></div>
								<div className="content">
									<h3 >{entry.date}</h3>
									<p>{entry.message}</p>
								</div>
							</li>)
						}
					</ul>
				</div>
			</section>
		);
	}
}

export default Calendar;
