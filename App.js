import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ShortNewsTab from './components/ShortNewsTab';

export default function App() {
  return (
    <View style={styles.container}>
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
