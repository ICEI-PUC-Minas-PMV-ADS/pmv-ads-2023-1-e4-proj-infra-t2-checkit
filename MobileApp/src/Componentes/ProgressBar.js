import { useEffect } from "react";
import { View ,Text} from "react-native";
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
      <Text>FDSFS</Text>
      <Animated.View  style={style} />
      
    </View>
  );
}
