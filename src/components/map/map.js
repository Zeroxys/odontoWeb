import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap( (props) => {
  return (
      <GoogleMap styles={ {width:'100px'} }
        defaultZoom={14}
        defaultCenter={{ lat: 17.976122, lng: -92.925110 }}>
      {props.isMarkerShown && <Marker position={{ lat: 17.989456, lng: -92.947506 }} />}
    </GoogleMap>
  )
}))

export default Map