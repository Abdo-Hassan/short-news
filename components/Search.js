import { Entypo } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { NewsContext } from '../utils/Context';
import SingleNews from './SingleNews';

const Search = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState('');

  const handleModal = (searchResult) => {
    setModalVisible(true);
    setCurrentNews(searchResult);
  };

  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    } else {
      setSearchResults(
        articles?.filter((article) => article?.title.includes(text))
      );
    }
  };

  return (
    <View style={{ width: '100%', position: 'relative' }}>
      <TextInput
        onChangeText={(text) => handleSearch(text)}
        placeholder='Search for news'
        placeholderTextColor={darkTheme ? '#fbfbfb' : '#000'}
        style={{
          ...styles.search,
          backgroundColor: darkTheme ? '#000' : 'lightgrey',
          color: darkTheme ? '#fbfbfb' : '#000',
        }}
      />

      <View style={styles.searchResults}>
        <FlatList
          data={searchResults?.slice(0, 10)}
          keyExtractor={(item) => item?.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item?.title}
              activeOpacity={0.7}
              onPress={() => handleModal(item)}>
              <Text
                style={{
                  ...styles.singleResult,
                  backgroundColor: darkTheme ? '#000' : 'lightgrey',
                  color: darkTheme ? '#fbfbfb' : '#000',
                }}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType='slide'
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{ position: 'absolute', zIndex: 2, right: 0, margin: 20 }}>
          <Entypo
            name='circle-with-cross'
            size={30}
            color={darkTheme ? '#fbfbfb' : '#000'}
          />
        </TouchableOpacity>
        <View style={{ height: '100%' }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 2,
    shadowColor: '#000',
    elevation: 5,
  },
});
