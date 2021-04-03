import React from 'react';
import MapContainer from './components/maps'

export default function App() {
  let x = 1;
  
  //const unsubscribe = store.subscribe(() => {
  //  console.log("store changed!", store.getState());
  //})

  //userLogin("user1", "pass", "sdfsdfsdf");
  //unsubscribe();

  return (
    <MapContainer />
  );
}