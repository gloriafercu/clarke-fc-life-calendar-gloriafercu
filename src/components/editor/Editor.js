import React from 'react';
import './editor.css';
import { Link } from 'react-router-dom';

class Editor extends React.Component{
	render() {
		return (
			<section className="editor">
				<form className="editor__container">
					<div className="date__container">
						<label className="date__label">Fecha</label>
						<input className="date" type="date" name="date" required/>
					</div>
					<div className="status__container">
						<legend className="legend">Estado</legend>
						<input className="status__happy" type="radio" id="option1" value="happy" name="options" onChange = {this.props.selected} checked required />
						<label className="status__label" htmlFor="option1"></label>
						<input className="status__sad" type="radio" id="option2" value="sad" name="options" onChange = {this.props.selected} required/>
						<label className="status__label" htmlFor="option2"></label>
					</div>
					<div className="message__container">
						<label className="message__label">Mensaje</label>
						<input className="message" type="text" placeholder="¿Por qué es un buen día?" />
					</div>
					<div className="buttons">
						<Link className="link" to={'/calendar'}>
							<input className="button--save" type="submit" onClick = {this.props.clicked} value="GUARDAR"/>
						</Link>
						<Link className="link" to={'/calendar'}>
							<button className="button--cancel" type="button" onClick = {this.props.clicked}>Cancelar</button>
						</Link>
					</div>
				</form>
			</section>
		);
	}
}

export default Editor;
