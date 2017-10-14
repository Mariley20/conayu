
import React from 'react';
import data from './data/Data';
import Utils from './Utils';

class Model {
	constructor () {
		this.notify = null;
		this.userInfo = {
			name: null,
			surname : null,
			email : null,
			phone : null
		}
		this.properties = data.properties;
		this.activeProperty = data.properties[0]
		this.filteredProperties = [];
		this.isFiltering = false;
		this.isRouting = false;
		this.targetPlace = null;
	}
	addPhone() {
		console.log("phone: "+this.userInfo.phone);
		this.notify();
	}
	setUserInfo (info) {
		this.userInfo = info;
		//Utils.store('lyft', this.userInfo);
		this.notify();
	}

	subscribe (render) {
		this.notify = render;
	}
	setActiveProperty (property) {
		this.activeProperty = property;
		this.notify();
	}

	setTarget (targetPlace) {
		this.targetPlace  = targetPlace;
		this.notify();
	}

	setFilter (param) {
		this.isFiltering = true;
		console.log ('before filter:', this.properties.length);
		this.filteredProperties = this.properties.filter( (item) =>  item.bedrooms == 2);
		console.log ('after filter:', this.filteredProperties.length);
		this.notify();
	}

	setIsRouting ( ) {
		this.isRouting = true;
		this.notify();
	}
}

export default Model;
