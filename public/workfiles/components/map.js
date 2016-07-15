import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

/*map component*/
export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div id="map-container" style={{height: '400px'}} /> }
            googleMapElement={
                <GoogleMap
                    ref={(map) => console.log(map)}
                    defaultZoom={12}
                    defaultCenter={{lat: props.lat, lng: props.lng}}
                >
            </GoogleMap>

            }
        />
    );
}
/*still working on displaying landings, not sure how to integrate this with the rest of filters/overlays*/
function landingPins(pins) {
	return (
		pins.map((pin) => {
				return (
					<Marker
						{...{position: {lat: pin, lng: pin}}}
					/>
				);
		})
	)
}
