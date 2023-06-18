import { useEffect } from "react";
import { View ,Text,StyleSheet} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";


export function ProgressBar({progresso} ) {
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
    <View style={styles.viewContainer}>
      
      <Animated.View   style={[style,styles.viewAnimated, progresso <25 ?{backgroundColor:'#A6523F'}:(progresso >= 25 && progresso <75?{backgroundColor:'#F5B640'}:{backgroundColor:'#7BBF15'})]} >
        <Text style={styles.textoProgresso}>{progresso +' %'}</Text>
        </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({ 
viewContainer:{

width:"150%",
height:18,
backgroundColor:"white",
borderRadius:10,

},
viewAnimated:{


height:18,
borderRadius:10,




},

textoProgresso:{
textAlign:"center",


},



})
