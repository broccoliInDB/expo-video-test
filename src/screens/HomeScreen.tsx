import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation, route }) {
  const handlePress = () => {
    navigation.navigate('Video');
  };

  const handlePressOld = () => {
    navigation.navigate('VideoOld');
  };

  return (
    <View>
      <Text className="mb-2 text-center text-lg">Home</Text>
      <TouchableOpacity
        className="m-2 items-center justify-center rounded bg-green-500 p-2"
        onPress={handlePress}>
        <Text>Move Video (expo video) Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="m-2 items-center justify-center rounded bg-blue-500 p-2"
        onPress={handlePressOld}>
        <Text>Move Video old (expo av) Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(HomeScreen);
