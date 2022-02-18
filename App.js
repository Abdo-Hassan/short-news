import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ShortNewsTab from './components/ShortNewsTab';
import { PrimaryColor } from './constants/Theme';

export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: PrimaryColor }}>
      <ShortNewsTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
