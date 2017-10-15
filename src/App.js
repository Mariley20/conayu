import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';
import SignUp from './SignUp';
import DataMap from './Map';
import MomFeed from './MomFeed';
import BabyFeed from './BabyFeed';

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/signUp" render={() => <SignUp model={model} />}/>
				<Route path="/map" render={() => <DataMap model={model}/>}/>
				<Route  path="/momFeed" render={() => <MomFeed model={model} />}/>
				<Route path="/babyFeed" render={() => <BabyFeed model={model}/>}/>
				<Route path='/hackathon-midis' render={() => <Redirect to="/home"  />}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;

