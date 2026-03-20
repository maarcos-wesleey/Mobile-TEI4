import React from "react";
import {View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import MinMax from "./src/components/MinMax";
// import Primeiro from "./src/components/Primeiro";
// import CompPadrao, {Comp1, Comp2} from './src/components/Multi'

import Aleatorio from "./src/components/Aleatorio";

export default () => {
  return (
    <View style={styles.App}>
      <StatusBar style="light" />
      <Aleatorio max={20} min={5}/>
      <Aleatorio max={20} min={5}/>
      <Aleatorio max={20} min={5}/>
      <Aleatorio max={20} min={5}/>
      <Aleatorio max={20} min={5}/>
      {/* <MinMax min={3} max={20}/>
      <MinMax min={3} max={20}/>
      <CompPadrao/>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: 'rgb(255, 12, 12)',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})