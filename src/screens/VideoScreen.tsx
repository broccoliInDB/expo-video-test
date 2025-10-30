import { useVideoPlayer, VideoView } from 'expo-video';
import { memo, useEffect, useRef } from 'react';
import { View } from 'react-native';

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

declare global {
  interface Performance {
    memory?: MemoryInfo;
  }
}

function VideoScreen() {
  // const videoUri =
  //   'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v';
  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const memoryCheckInterval = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = (player: any) => {
    player.loop = true;
    player.play();
  };
  const player = useVideoPlayer(videoUri, handlePlay);

  useEffect(() => {
    console.log('✅ VideoScreen mounted');

    // 메모리 사용량 체크 (1초마다)
    let counter = 0;
    memoryCheckInterval.current = setInterval(() => {
      counter++;
      console.log(`🎬 Video running... ${counter}s`);
    }, 1000);

    return () => {
      console.log('unmount ⏰');
      // 메모리 체크 정리
      if (memoryCheckInterval.current) {
        clearInterval(memoryCheckInterval.current);
      }
      // 플레이어 정리 - 안전하게 처리
      try {
        if (player) {
          player.pause();
        }
      } catch (error) {
        console.log('Player cleanup error (expected):', (error as Error).message);
      }
    };
  }, [player]);

  return (
    <View className="">
      <VideoView player={player} style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

export default memo(VideoScreen);
