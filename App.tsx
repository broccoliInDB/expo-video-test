import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { View, Text, TouchableOpacity } from 'react-native';

import './global.css';

export default function App() {
  const handleGC = () => {
    global.gc();
  };

  return (
    <NavigationContainer>
      <StackNavigator />
      <TouchableOpacity
        className="absolute right-0 top-[50%] rounded bg-red-500 p-2"
        onPress={handleGC}>
        <Text>gc</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
}
