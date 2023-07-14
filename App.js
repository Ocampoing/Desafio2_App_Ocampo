import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import MainScreen from './src/Screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
});