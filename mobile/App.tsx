import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/home/index';
import Success from './src/pages/success/index';
import Search from './src/pages/Search/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1D53',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
