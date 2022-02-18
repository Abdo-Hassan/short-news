import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ShortNewsTab from './components/ShortNewsTab';
import { PrimaryColor } from './constants/Theme';
import NewsContextProvider from './utils/Context';

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: PrimaryColor }}>
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
