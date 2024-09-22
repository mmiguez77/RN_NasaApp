import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screen/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingTop: 5,
  },
});
