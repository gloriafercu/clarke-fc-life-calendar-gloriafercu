import React from 'react';
import './editor.css';

class Editor extends React.Component{
	render() {
		return (
			<section className="editor">
				<div className="inputs">
					<label>Nombre:</label>
					<input className="name" type="text" />
					<label>Apellidos:</label>
					<input className="surname" type="text" />
					<button type="button" onClick = { this.props.clicked }>GUARDAR</button>
				</div>
			</section>
		);
	}
}

export default Editor;
