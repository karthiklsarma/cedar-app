import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { userLogin } from './store/actions';
import store from './store/store'

export default function App() {
  let x = 1;
  
  const unsubscribe = store.subscribe(() => {
    console.log("store changed!", store.getState());
  })

  userLogin("user1", "pass", "sdfsdfsdf");
  unsubscribe();

  return (
    <View style={styles.container}>
      <Text>Cedar App !!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
