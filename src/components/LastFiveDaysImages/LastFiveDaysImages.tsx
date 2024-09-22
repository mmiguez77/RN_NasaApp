import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NasaResponse } from '../../infrastructure/interfaces/NasaResponse';

interface Props {
  lastFiveDaysImages: NasaResponse[];
}

const LastFiveDaysImages = ({ lastFiveDaysImages }: Props) => {
  return (
    <View>
      <Text>{lastFiveDaysImages.map(image => image.title)}</Text>
    </View>
  );
};

export default LastFiveDaysImages;

const styles = StyleSheet.create({});
