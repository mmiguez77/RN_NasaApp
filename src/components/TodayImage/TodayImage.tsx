import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  url: string;
  date: string;
  title: string;
}

const TodayImage = ({url, date, title}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.touchableText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodayImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 12,
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  touchableText: {
    fontSize: 16,
    color: '#c4c5ca',
    marginRight: 8,
  },
});
