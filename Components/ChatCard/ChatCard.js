import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const ChatCard = ({image}) => {
  const imageHeight=useSharedValue(70)
const imageWidth=useSharedValue(70)
const screenWidth=Dimensions.get("screen").width
const screenHeight=Dimensions.get("screen").height
const scale=useSharedValue(0)
const AnimatedBtn=Animated.createAnimatedComponent(TouchableOpacity)

const imageStyle2= useAnimatedStyle(
  ()=>{
    return{
      width:imageWidth.value,
      height:imageHeight.value,
      borderRadius:30,
      transform:[{translateX:imgTransY.value}]
      }
  }
)

const AnimatedImage=Animated.createAnimatedComponent(Image)
  return (
  
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

    
    <AnimatedBtn onPress={()=>{
      
      
      if (imageWidth.value==70) {
imageHeight.value= withTiming(300,{duration:500})
imageWidth.value= withTiming(300,{duration:500})

imgTransY.value=withTiming(50  ,{duration:500})
} else {
    imageHeight.value= withTiming(70,{duration:500})
    imageWidth.value= withTiming(70,{duration:500})
    
    imgTransY.value=withTiming(0,{duration:500})
  }
}}>

<AnimatedImage source={image} style={[imageStyle2,{marginLeft:20,marginTop:30}]}/>
</AnimatedBtn>



  </View>

    
  )
}

export default ChatCard