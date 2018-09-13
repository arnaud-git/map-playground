/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from '@bam.tech/react-native-component-map-clustering';
// import MapView from '@bam.tech/react-native-component-map-clustering';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from './src/components/CustomMarker';
import markers from './markerCoordinates';

const initialRegion = {
  longitudeDelta: 5,
  latitudeDelta: 5,
  longitude: 2.0,
  latitude: 47.8,
};

export default class App extends Component {

  state = {
    mapRegion: initialRegion,
    selectedMarkerId: null,
  };

  setRegion = region => {
    this.setState({ mapRegion: region })
  }

  setSelectedMarker = id => {
    this.setState({ selectedMarkerId: id })
  }

  isMapZoomed(region) {
    return region.latitudeDelta < 2.5 && region.longitudeDelta < 2
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("props : , ", this.props, nextProps)
    // console.log("state : , ", this.state, nextState)
    return true;
  }

  render() {
    console.log("map rendue")
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        // onRegionChange={this.setRegion}
        setRef={() => { }}
        onRegionChangeComplete={this.setRegion}
        clustering
      >
        {markers.map(marker => (
          <CustomMarker
            key={marker.id}
            id={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            marker={marker}
            isSelected={marker.id === this.state.selectedMarkerId}
            setSelectedMarker={this.setSelectedMarker}
            isZoomed={this.isMapZoomed(this.state.mapRegion)}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
