import { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ShortNewsTab from './components/ShortNewsTab';
import { PrimaryColor } from './constants/Theme';
import NewsContextProvider, { NewsContext } from './utils/Context';

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? PrimaryColor : '#fff',
      }}>
      <ShortNewsTab />
      <StatusBar style='auto' backgroundColor={PrimaryColor} />
    </View>
  );
}

export default () => {
  return (
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
