import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '~/screens/HomeScreen';
import VideoScreen from '~/screens/VideoScreen';
import VideoOldScreen from '~/screens/VideoOldScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="VideoOld" component={VideoOldScreen} />
    </Stack.Navigator>
  );
}
