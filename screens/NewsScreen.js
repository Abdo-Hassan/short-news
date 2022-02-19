import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { NewsContext } from '../utils/Context';
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../components/SingleNews';

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();
  const windowHight = Dimensions.get('window').height;

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={'stack'}
          data={articles?.slice(0, 20)}
          sliderHeight={300}
          itemHeight={windowHight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default NewsScreen;
