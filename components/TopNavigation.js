import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { PrimaryColor, SecondaryColor } from '../constants/Theme';

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: PrimaryColor }}>
      {/* Top bar */}
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: 'lightgrey' }}>
            <MaterialCommunityIcons
              name='theme-light-dark'
              size={24}
              color={SecondaryColor}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <SimpleLineIcons name='arrow-left' size={15} color={SecondaryColor} />
          <Text style={{ ...styles.text, color: 'lightgrey' }}>Discover</Text>
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: '#fff' }}>
        {index ? 'All News' : 'Discover'}
      </Text>

      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign name='reload1' size={24} color={SecondaryColor} />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{ ...styles.text, color: '#fff' }}>All News</Text>
          <SimpleLineIcons
            name='arrow-right'
            size={15}
            color={SecondaryColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: SecondaryColor,
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});
