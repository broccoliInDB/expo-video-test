import { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';

function VideoOldScreen() {
  // const videoUri =
  //   'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v';
  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  useEffect(() => {
    return () => {
      console.log('unmount ⏰');
    };
  }, []);

  return (
    <View className="">
      <Video
        source={{ uri: videoUri }}
        shouldPlay
        isLooping
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}

export default memo(VideoOldScreen);
