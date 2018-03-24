import React from 'react';
import './editor.css';
import {Link} from 'react-router-dom';

class Editor extends React.Component{
	render() {
		return (
			<section className="editor">
				<div className="inputs">
					<label>Nombre:</label>
					<input className="name" type="text" />
					<label>Apellidos:</label>
					<input className="surname" type="text" />
					<Link className="link" to={'/calendar'}>
						<button type="button" onClick = { this.props.clicked }>GUARDAR</button>
					</Link>
				</div>
			</section>
		);
	}
}

export default Editor;
