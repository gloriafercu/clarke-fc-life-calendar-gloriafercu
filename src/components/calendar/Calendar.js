import React from 'react';
import './calendar.css';

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
				</div>
			</section>
		);
	}
}

export default Calendar;
