import React from 'react';
import './calendar.css';
import {Link} from 'react-router-dom';

class Calendar extends React.Component {
	render() {
		return (
			<section className="calendar">
				<div className="LocalStorage">
					<p>Datos almacenados en LocalStorage</p>
					<ul className="resultados">
						{this.props.elements.map((entry,index) =>
							<li className="itemName" key={index}>{entry.name} {entry.surname}</li>
						)}
					</ul>
					<Link className="link" to={'/'}>
						<button type="button--back">Back</button>
					</Link>
				</div>
			</section>
		);
	}
}

export default Calendar;
