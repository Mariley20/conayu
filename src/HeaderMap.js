import React, { Component } from 'react';
import usuario from './img/usuario.png';
import carro from './img/carro.png';
import './App.css';
import './Map.css';

import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
class HeaderMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	render() {
		const { model } = this.props;
		const open = () => {
			this.setState({
				show: true
			})
		}
		const close = () => {
			this.setState({
				show: false
			})
		}
		return (
			<header id="mapa_header">
				<img className="img-responsive" id='usuario_logo' onClick={open} src={usuario} alt="" />
				
				<span className="fa-stack fa-lg fa-2x">
					<i className="fa fa-circle fa-stack-2x"></i>
					<i className="fa fa-gift fa-stack-1x fa-inverse"></i>
				</span>
				<div id="mySidenav" className="sidenav" style={{ width: this.state.show ? '250px' : 0 }}>
					<a href="javascript:void(0)" className="closebtn" onClick={close}>&times;</a>
					<div id="datos_usuario">
						{/* <div><strong>Name: </strong>{model.userInfo.name}</div>
						<div><strong>Surname: </strong>{model.userInfo.surname}</div>
						<div><strong>Phone: </strong>{model.userInfo.phone}</div>
						<div><strong>Email: </strong>{model.userInfo.email}</div> */}
					</div>
				</div>
			</header>
		);
	}
}
export default HeaderMap;