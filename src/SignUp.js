import React, {Component} from 'react';
// import './App.css';
import './SignUp.css';
import {
	NavLink
} from 'react-router-dom'

class HeaderApp extends Component{
	render(){return(
	  <header className="text-center">
		<div className="btnVolver">
			<NavLink to="/Home"><i className="fa fa-angle-left backend" aria-hidden="true"></i>{<back/>}</NavLink>
		</div>
		<h1 className="conayus-name">YANAPA</h1>
		<h3 className="signuph2 text-center">Ingresar</h3>
		{/* <hr/> */}
	  </header>);
	}
  }
  
class SignUp extends Component {
	
		constructor (props) {
			super (props);
			this.state = {
                name : null,
                email : true
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
				<div id="text-container-component">
					<HeaderApp/>
					<div className="container-fluid">					
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12 text-center">
								<form data-toggle="validator">
									<div className="form-group row">
										<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 input-group">
											<span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>										
											<input type="text" onChange={e => {this.state.name}} className="form-control inputName" placeholder="Usuario o correo" required/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-12 col-md-12 input-group">
											<span className="input-group-addon"><i className="fa fa-key fa-fw lock"></i></span>							
											<input type="password" onChange={e => {this.state.email}} className="form-control inputEmail"  placeholder="contraseña" data-error="Bruh, that email address is invalid" required/>
										</div>
										<div className="help-block with-errors"></div>
									</div>
									<section className="container-fluid form">
										
										{this.state.email ?<NavLink to={"/map"}className="btn btn-lg btn-block btn-ingresar">INGRESAR</NavLink>
										:<button className="btn btn-lg btn-block btn-ingresar ">Ingresar</button>}
										{/* <label className="form-check-label">
											modificado por gladys
											 <a href=""><h6 className="signup-h">Restablecer Contraseña</h6></a>
										</label> */}
										<div className="singupbtn">
										{/* <p>Acceso rápido</p> */}
										<button className="btn-social doodle"><i className="fa fa-google-plus-square" aria-hidden="true"></i><a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">Google</a></button>
										<button className="btn-social face"><i className="fa fa-facebook-official" aria-hidden="true"></i> <a href="https://www.facebook.com/">facebook</a></button>
									</div>
									</section>
									</form>

							</div>
						</div>
                    </div>
			</div>
			);
		}
	}
export default SignUp;