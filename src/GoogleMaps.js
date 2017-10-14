import React from 'react';

const loadMaps = (cb) => {
	// window.google.maps script loading garbage
	const KEY = 'AIzaSyCsIUMjCPmZCK_CrP-7mTXPBQRZMNeYaU4'
	const URL = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=_mapsLoaded&libraries=places`
	window._mapsLoaded = cb
	const script = document.createElement('script')
	script.src = URL
	document.body.appendChild(script)

}


 class GoogleMaps extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: []
		};
		this.autocompleteDestino = null;
	}

	componentWillMount() {
		if (!window.google) {
			loadMaps(() => {
				this.forceUpdate();
				console.log ('_mapsLoaded', window.google);
			})
		}
	}

	componentDidMount() {
		const { properties, activeProperty } = this.props;
		const { latitude, longitude } = activeProperty;

		this.map = new window.google.maps.Map(this.refs.map, {
			center: { lat: latitude, lng: longitude },
			zoom: 15,
			mapTypeControl: false
		});

		this.directionsService = new window.google.maps.DirectionsService;
		this.directionsDisplay = new window.google.maps.DirectionsRenderer;
		this.directionsDisplay.setMap(this.map);

		this.createMarkers(properties);


	}



	showInfoWindow(index) {
		const { markers } = this.state;
		markers[index] && markers[index].iw.open(this.map, markers[index]);
	}

	componentWillReceiveProps(nextProps) {
		const { activeProperty, filteredProperties, isFiltering } = nextProps;
		const { index } = activeProperty;

		// Hide all the other info boxes
		this.hideAll();

		// SHow info window of new active property
		if (isFiltering && filteredProperties.length === 0) {
			this.hideAll();
		} else {
			this.hideAll();
			this.showInfoWindow(index);
		}
	}

	componentDidUpdate() {
		const { filteredProperties, isFiltering, isRouting } = this.props;
		const { markers } = this.state;

		if (markers) {
			markers.forEach((marker) => {
				const { property } = marker; // Return associated property
				if (property){
					if (isFiltering) {
						// show markers of filtered properties and hide other markers
						if (filteredProperties.includes(property)) {
							markers[property.index].setVisible(true);
						} else {
							// Hide all the other markers
							markers[property.index].setVisible(false);
						}
					} else {
						// show all markers
						markers[property.index].setVisible(true);
					}
				}
			});
		}

	}


	 createMarkers(properties) {
		 const { setActiveProperty, activeProperty } = this.props;
		 const activePropertyIndex = activeProperty.index;
		 const { markers } = this.state;

		 properties.map((property) => {
			 const { latitude, longitude, index, address } = property;
			 const iw = new window.google.maps.InfoWindow({
				 content: `<h1>${address}</h1>`,
			 });

			 this.marker = new window.google.maps.Marker({
				 position: { lat: latitude, lng: longitude },
				 map: this.map,
				 label: {
					 color: '#fff',
					 text: `${index + 1}`,
				 },
				 icon: {
					 url: 'https://ihatetomatoes.net/react-tutorials/google-maps/images/img_map-marker.png',
					 size: new window.google.maps.Size(22, 55),
					 // The origin for this image is (0, 0).
					 origin: new window.google.maps.Point(0, -15),
					 // The anchor for this image is the base of the cross at (11, 52).
					 anchor: new window.google.maps.Point(11, 52),
				 },
				 property,
			 });

			 this.marker.iw = iw;

			 this.marker.addListener('click', () => {
				 // Hide all markers
				 this.hideAll();
				 // Set active property, scroll to active property in list
				 setActiveProperty(property, true);
			 });

			 // Push marker on to state
			 markers.push(this.marker);

			 this.showInfoWindow(activePropertyIndex);
		 });
	 }

	hideAll() {
		const { markers } = this.state;

		markers.forEach((marker) => {
			marker.iw.close();
		});
	}

	render() {
		return (
			<div className="mapContainer">
				<div id="map" ref="map"></div>

			</div>
		);
	}
}

export default GoogleMaps;
