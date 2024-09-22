import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

// Custom
import Header from '../../components/Header/Header';
import getImgOfDay from '../../services/getImgOfDay.service';

const HomeScreen = () => {
  useEffect(() => {
    const response = getImgOfDay();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
