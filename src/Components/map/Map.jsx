import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon ,divIcon} from 'leaflet';
export default function Map() {
  const [center, setCenter] = useState([10.23604, 76.51952]);
  const zoom = 7;
  const markers = [
    {
      geocode: [10.25146355102299, 76.73898835453463],
      title: "blah"
    },
    {
      geocode: [10.729300800672455, 76.33663330426945],
      title: "thrissur"
    },
    {
      geocode: [9.26787101629468, 76.94277857479881],
      title: "kollam"
    }
  ]
  const createCustomClusterIcon= (cluster)=>{
    return new divIcon({
      html:`<div>${cluster.getChildCount()}</div>`,
      className:"cluster-icon",
      // iconSize: point(33,33,true),
    })
  }
  // const customIcon = new Icon({
  //   iconUrl:"https://cdn-icons-png.flaticon.com/128/484/484167.png",
  //   iconSize:[38,38]
  // })

  return (
    <div id='map-container'>

      <MapContainer
        center={center}
        zoom={zoom}>
        <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {/* chunkedLoading is used to avoid massive loading */}
        <MarkerClusterGroup 
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}> 
          {markers.map(marker =>
            // "icon={customIcon}" use this for custom icon
            <Marker position={marker.geocode} >
              <Popup>
                {marker.title}
              </Popup>
            </Marker>
          )}
        </MarkerClusterGroup>



      </MapContainer>

    </div>
  )

}
