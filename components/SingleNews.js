import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { PrimaryColor } from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        // transform: [{ scaleY: -1 }],
      }}>
      <Image
        source={{ uri: item?.urlToImage }}
        style={{ height: '45%', resizeMode: 'cover', width: windowWidth }}
      />

      <View style={{ ...styles.description, backgroundColor: PrimaryColor }}>
        <Text style={{ ...styles.title, color: '#fff' }}>{item?.title}</Text>
        <Text style={{ ...styles.content, color: '#fff' }}>
          {item?.description}
        </Text>
        <Text style={{ color: '#fff' }}>
          News by
          {item?.author ?? 'unknown'}
        </Text>

        <ImageBackground
          source={{ uri: item?.urlToImage }}
          style={styles.footer}
          blurRadius={30}>
          <TouchableOpacity onPress={() => Linking.openURL(item?.url)}>
            <Text style={{ fontSize: 15, color: '#fff' }}>
              {item?.content?.slice(0, 45)}...
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff' }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#d7be69',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SingleNews;
