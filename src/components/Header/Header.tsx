import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require('../../assets/nasa_logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  leftContainer: {flex: 1, alignItems: 'flex-start'},
  rightContainer: {flex: 1, alignItems: 'flex-end'},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 60,
    height: 60,
  },
});
