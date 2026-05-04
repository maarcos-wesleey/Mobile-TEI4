import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TelaA />
      <TelaB />
      <StatusBar style="auto" />
    </View>
  );
}
