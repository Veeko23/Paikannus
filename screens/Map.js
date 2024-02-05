import React, { useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


export default function Map(props) {
const [marker, setMarker] = useState(null)

const showMarker = (e) => {
    const coords = e.nativeEvent.coordinate
    setMarker(coords)
}
    /*
    useEffect(() => {
        (async() =>{
            getUserPosition()
        })()
    }, [])*/

  return (
    <>
      <MapView 
      style={styles.map}
      region={props.location}
      mapType={props.mapType}
      onLongPress={showMarker}
      >
        {marker && 
        <Marker
        title="my Marker"
        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
        />}
        </MapView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
