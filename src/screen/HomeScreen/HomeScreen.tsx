import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format, sub } from 'date-fns';

// Custom
import { getTodayImage, getLastFiveDaysImages } from '../../services';
import { NasaResponse } from '../../infrastructure/interfaces/NasaResponse';
import Header from '../../components/Header/Header';
import TodayImage from '../../components/TodayImage/TodayImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages/LastFiveDaysImages';

const HomeScreen = () => {
  const [todayImage, setTodayImage] = useState<NasaResponse>();
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState<NasaResponse[]>(
    [],
  );
  const [errorMsg, setErrorMsg] = useState<any>('');

  useEffect(() => {
    const CallGetImgOfDay = async () => {
      try {
        const response = await getTodayImage();
        if (response) {
          setTodayImage(response);
        }
      } catch (error) {
        setErrorMsg(error);
      }
    };

    CallGetImgOfDay();
  }, []);

  useEffect(() => {
    const startDate = format(sub(new Date(), { days: 5 }), 'yyyy-MM-dd');
    const endDate = format(new Date(), 'yyyy-MM-dd');

    const CallGetLast5DaysImg = async () => {
      try {
        const response = await getLastFiveDaysImages(startDate, endDate);
        if (response) {
          setLastFiveDaysImage(response);
        }
      } catch (error) {
        setErrorMsg(error);
      }
    };

    CallGetLast5DaysImg();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {!todayImage ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <TodayImage
          url={todayImage.url}
          date={todayImage.date}
          title={todayImage.title}
        />
      )}
      {!lastFiveDaysImage ? (
        <Text>Loading...</Text>
      ) : (
        <LastFiveDaysImages lastFiveDaysImages={lastFiveDaysImage} />
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
