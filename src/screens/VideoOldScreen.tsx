import { memo, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';

function VideoOldScreen() {
  // const videoUri =
  //   'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v';
  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const memoryCheckInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('✅ Video old Screen mounted');
    // 메모리 사용량 체크 (1초마다)
    let counter = 0;
    memoryCheckInterval.current = setInterval(() => {
      counter++;
      console.log(`🎬 Video old running... ${counter}s`);
    }, 1000);

    return () => {
      console.log('unmount old ⏰');
      // 메모리 체크 정리
      if (memoryCheckInterval.current) {
        clearInterval(memoryCheckInterval.current);
      }
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
