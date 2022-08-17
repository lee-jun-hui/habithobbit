import { StyleSheet, Text, View } from 'react-native';
import CreateHabit from './src/screens/CreateHabit';

export default function App() {
  return (
    <View style={styles.container}>
      <CreateHabit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
