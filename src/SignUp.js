import React, {Component} from 'react';
// import './App.css';
import './SignUp.css';
import {
	NavLink
} from 'react-router-dom'

class HeaderApp extends Component{
	render(){return(
	  <header>
		<div className="btnVolver">
			<NavLink to="/Home"><span className="glyphicon glyphicon-chevron-left" />{<back/>}</NavLink>
		</div>
		<span className="glyphicon glyphicon-user"></span>
		<h2 className="text-center">Ingresar</h2>
		<hr/>
	  </header>);
	}
  }
  
class SignUpForm extends Component {
	
		constructor (props) {
			super (props);
			this.state = {
                name : null,
                email : null
			}
		}
		render () {
			const {model} = this.props;
			const onInputChange = (e) => {
				this.setState ({
					name: e.target.checked
				});
			}
			return (
				<div>
					<HeaderApp/>
					<div className="container-fluid">					
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12 text-center">
								<form data-toggle="validator">
									<div className="form-group row">
										<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 input-group">										
											<input type="text" onChange={e => {this.state.name}} className="form-control inputName" placeholder="Usuario o correo" required/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-12 col-md-12 input-group">							
										<input type="email" onChange={e => {this.state.email}} className="form-control inputEmail"  placeholder="contraseña" data-error="Bruh, that email address is invalid" required/>
										</div>
										<div className="help-block with-errors"></div>
									</div>
									<section className="container-fluid form">
										
										{this.state.goFordward ?<NavLink to={"/Map"}className="btn btn-lg btn-block btn-lyft">iNGRESAR</NavLink>
										:<button className="btn btn-lg btn-block btn-ingresar ">Ingresar</button>}
										<label className="form-check-label">
											 <a href=""><p>RESTABLECER CONTRASEÑA</p></a>
										</label>
									</section>
									</form>
							</div>
						</div>
				
				</div>
			</div>
			);
		}
	}
export default SignUpForm;