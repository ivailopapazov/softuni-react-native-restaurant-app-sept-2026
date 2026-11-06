import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
          <Text>React Navigation</Text>
      </NavigationContainer>
    </>
  );
}


