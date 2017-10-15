import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import HeaderMap from './HeaderMap';
import './Map.css'
 import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
const DataMap = ({model}) => {
	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: model.filteredProperties,
		isFiltering: model.isFiltering,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		//this.setState({
		//	activeProperty: property,
		//});
		model.setActiveProperty(property);

		const {index} = property;

		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
			//jump(target, {
			//	duration: 800,
			//	easing: easeInOutCubic,
			//});
		}
	}
	const onPathBntClick = () => {
		model.setFilter(10);
	}

	return (<div>
		<HeaderMap />
		
		<h1 className="conayus-name">YANAPA</h1>
		<div className="col-md-3 col-sm-3 filtro">
			<button id="ruta" className="btn btn-success" onClick={onPathBntClick}>Anemia Severa</button>
		</div>
		<GoogleMaps
			model = {model}
			properties = {properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>
	</div>);
}

export default DataMap;