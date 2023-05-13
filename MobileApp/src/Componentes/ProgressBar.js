import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";


export function ProgressBar({ progresso }) {
  const sharedProgress = useSharedValue(progresso);
  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  useEffect(() => {
    sharedProgress.value = withTiming(progresso);
  }, [progresso]);
  return (
    <View>
      <Animated.View  style={style} />
    </View>
  );
}