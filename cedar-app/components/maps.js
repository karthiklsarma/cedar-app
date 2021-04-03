import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const RADIUS = 200
export default class MapContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            currentLatitude: 47.610149,
            currentLongitude: -122.201515,
            region: {
                latitude: 47.610149,
                longitude: -122.201515,
                latitudeDelta:  0.020,
                longitudeDelta:  0.020,
            }
        };
    }

    render(){
        return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            initialRegion={this.state.region}
            >
                <MapView.Circle
                    center = { this.state.region }
                    radius = {RADIUS}
                    strokeWidth={2}
                    strokeColor="#3399ff"
                    fillColor="#80bfff"
                />
            </MapView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });