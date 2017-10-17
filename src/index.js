import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import Model from './Model';
import registerServiceWorker from './registerServiceWorker';

const model = new Model();
const render = () => {
	ReactDOM.render(
			<App model = {model}/>
		 , document.getElementById('root'));
}
model.subscribe(render);
render();

registerServiceWorker();
