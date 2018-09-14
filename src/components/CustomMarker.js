import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { man_marker, selected_man_marker } from '../../images';

export default class CustomMarker extends Component {

  // shouldComponentUpdate(prevProps) {
  //   return prevProps.isSelected !== this.props.isSelected || prevProps.isZoomed !== this.props.isZoomed
  // }

  render() {
    // console.log("render de : ", this.props.marker.id)
    // console.log(this.props.region)
    console.count('marker')
    return (
      <MapView.Marker
        coordinate={this.props.marker}
        onPress={() => this.props.setSelectedMarker(this.props.marker.id)}
        anchor={{ x: 0.5, y: 0.5 }}
      >
        {this.props.isZoomed ? //this.isMapZoomed(this.props.region) ?
          <Image source={this.props.isSelected ? selected_man_marker : man_marker}></Image> :
          <View style={styles.markerIcon} />}
      </MapView.Marker>
    );
  }
}

const styles = StyleSheet.create({
  markerIcon: {
    backgroundColor: 'rgba(100, 180, 100, 1)',
    width: 5,
    height: 5,
    borderRadius: 3,
  },
  selectedMarkerIcon: {
    backgroundColor: 'rgba(100, 180, 100, 0.75)',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
