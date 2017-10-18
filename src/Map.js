import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import HeaderMap from './HeaderMap';
import './Map.css'
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

	const onPathleveBntClick = () => {
		
		model.setFilterAceptable(10);
	}

	return (<div>
		<HeaderMap />
<<<<<<< HEAD
		
		<h2>MapLive </h2>
		<div className="col-md-3 col-sm-3 filtro">
			<button id="ruta" className="btn btn-success" onClick={onPathBntClick}>
				<i className="fa fa-bicycle" aria-hidden="true"></i>
				Anemia Severa
			</button>
=======
		<h1 className="conayus-name">YANAPA</h1>
		<div className="filtro">
			<button id="all_point" className="btn btn-info anemia" onClick={onPathAllBntClick}>Total</button>
			<button id="point_severo" className="btn btn-success anemia" onClick={onPathleveBntClick}>Leve</button>
			<button id="point_moderada" className="btn btn-warning anemia" onClick={onPathMoBntClick}>Moderada</button>
			<button id="point_severo" className="btn btn-danger anemia" onClick={onPathBntClick}>Severa</button>
>>>>>>> 233b2b1726a7b75c387356aa8eb5ee2706ae53c2
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