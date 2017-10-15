import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import usuario from './img/usuario.png';
import './App.css';
import './Map.css';

import { NavLink } from 'react-router-dom'
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
						<NavLink to={"/momFeed"} className="btn btn-warning">Alimentate Mamá</NavLink>
						<NavLink to={"/babyFeed"} className="btn btn-warning">Alimentate Bebe </NavLink>
					</div>
				</div>
			</header>
		);
	}
}
export default HeaderMap;