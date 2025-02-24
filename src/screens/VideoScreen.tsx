import { useVideoPlayer, VideoView } from 'expo-video';
import { memo, useEffect } from 'react';
import { View, Text } from 'react-native';

function VideoScreen() {
  // const videoUri =
  //   'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v';
  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const handlePlay = (player) => {
    player.loop = true;
    player.play();
  };
  const player = useVideoPlayer(videoUri, handlePlay);

  useEffect(() => {
    return () => {
      console.log('unmount ⏰');
    };
  }, []);

  return (
    <View className="">
      <VideoView player={player} style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

export default memo(VideoScreen);
