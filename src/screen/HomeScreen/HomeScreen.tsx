import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom
import Header from '../../components/Header/Header';
import getImgOfDay from '../../services/getImgOfDay.service';
import TodayImage from '../../components/TodayImage/TodayImage';
import {NasaResponse} from '../../infrastructure/interfaces/NasaResponse';

const HomeScreen = () => {
  const [todayImg, setTodayImg] = useState<NasaResponse>();
  const [errorMsg, setErrorMsg] = useState<any>('');

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await getImgOfDay();
        if (response) {
          setTodayImg(response);
        }
      } catch (error) {
        setErrorMsg(error);
      }
    };

    callApi();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {!todayImg ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <TodayImage
          url={todayImg.url}
          date={todayImg.date}
          title={todayImg.title}
        />
      )}
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
