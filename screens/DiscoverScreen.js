import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SecondaryColor } from '../constants/Theme';
import { NewsContext } from '../utils/Context';
import { categories, sources } from '../utils/api';
import Search from '../components/Search';

const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      {/* search */}
      <Search />

      {/* categories */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? '#fbfbfb' : '#000' }}>
        Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item?.name)}>
            <Image source={{ uri: item?.pic }} style={styles.categoryImage} />
            <Text
              style={{ ...styles.name, color: darkTheme ? '#fbfbfb' : '#000' }}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* sources */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? '#fbfbfb' : '#000' }}>
        Sources
      </Text>
      <View style={styles.sources}>
        {sources?.map((source) => (
          <TouchableOpacity
            onPress={() => setSource(source?.id)}
            key={source?.id}
            style={styles.sourceContainer}>
            <Image source={{ uri: source?.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    borderBottomColor: SecondaryColor,
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  category: {
    height: 110,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: '40%',
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#cc313d',
  },
  sourceImage: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default DiscoverScreen;
