import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 4.0511,  // Cameroon's approximate center
          longitude: 9.7679,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('ClientSignup')}
          style={styles.button}
        >
          S'inscrire en tant que Client
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('Services')}
          style={styles.button}
        >
          Parcourir les Services
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    marginVertical: 5,
  },
});

export default HomeScreen;