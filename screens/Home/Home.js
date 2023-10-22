import { View,  Dimensions,ScrollView, StyleSheet,FlatList, ImageBackground,Image,StatusBar} from 'react-native'
import React from 'react'
import { Circle, } from 'react-native-shape'
import Animated,{useSharedValue,withSpring,useAnimatedStyle,withDelay, withTiming, JumpingTransition,}from 'react-native-reanimated'
import Leftcard from '../../Components/LeftCard/LeftCard'
import { CHANGE_BY_MOBILE_DPI } from '../../constants'
import { styles } from './HomeStyles'
import RightCard from '../../Components/RightCard/RightCard'
import CenterElement from '../../Components/Pentagon/Pentagon'
import TouchableResize from '../../Components/TouchableResize/TouchableResize'
import { Colors } from '../../global'
const Home = () => {
  const w= useSharedValue(10)
  const h= useSharedValue(200)
  const r= useSharedValue(0)
  const imgTransY= useSharedValue(0)
// const AnimatedImage=Animated.createAnimatedComponent(Image)
  const style=useAnimatedStyle(
    ()=>{
      return{
        width:w.value,
        height:h.value,
        borderRadius:r.value,
        backgroundColor:"#ec9800",
        transform:[{translateX:w.value}]
      }
    }
  )
const imageHeight=useSharedValue(70)
const imageWidth=useSharedValue(70)
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

// const AnimatedBtn=Animated.createAnimatedComponent(TouchableOpacity)

const scaleX=useSharedValue(1)

const animStyle=useAnimatedStyle(()=>{
  return{
    height:60,
width:200,
backgroundColor:"#ec9800",
  transform:[{scaleX:scaleX.value },],borderRadius:20,
  justifyContent:"center",
  alignItems:"center",
  shadowColor:"grey",shadowOpacity:1,shadowRadius:30
  
  }
})

const screenWidth=Dimensions.get("screen").width
const screenHeight=Dimensions.get("screen").height
const scale=useSharedValue(0)
const addedItemTranslateY=useSharedValue(0)
const addedItemTranslateX=useSharedValue(0)
const addedItemScaleX=useSharedValue(1)
const addedItemStyle=useAnimatedStyle(()=>{
  return{
  height:30,
  width:30,
 backgroundColor:"red",
borderRadius:30,
justifyContent:"center",
alignItems:"center",
transform:[{scale:scale.value},{translateY:addedItemTranslateY.value},{translateX:addedItemTranslateX.value},{scaleX:addedItemScaleX.value}],
marginTop:screenWidth/0.67
  }
})

const  doCartAnimation=()=>{
scale.value=withTiming(1,{duration:1000}),
addedItemTranslateY.value=withTiming(-screenWidth*1.9,{duration:1500})
addedItemTranslateX.value=withTiming(screenWidth-40,{duration:1500})
addedItemScaleX.value=withTiming(0.85,{duration:1000})
addedItemScaleX.value=withTiming(1,{duration:1000})
}
const translateY=useSharedValue(0)
const translateX=useSharedValue(0)

const renderLeftCard=({item,index})=>{
  return(
    <Leftcard index={index}/>
  )
}

const renderRightCard=({item,index})=>{
  return(
    <RightCard index={index}/>
  )
}
// const touch=React.useRef(new Animated.ValueXY({x:0,y:0})).current
  return (
    <>
<ImageBackground source={require('../../assets/images/bg.jpg')} style={{flex:1}}> 
<StatusBar backgroundColor={"transparent"} barStyle={'dark-content'} />



<View style={{flexDirection:"row",justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
<View><Image source={require('../../assets/images/cr.jpg')} style={{height:CHANGE_BY_MOBILE_DPI(50),width:CHANGE_BY_MOBILE_DPI(50 )}}/></View>
<View><TouchableResize name={"BUY TICKET"} style={styles.btn} /></View>
</View>
<View onStartShouldSetResponder={()=>true}
onResponderMove={(event)=>{
  // touch.setValue({x:event.nativeEvent.locationX,y:event.nativeEvent.locationY})
  console.log("jkhnjb",event.nativeEvent.pageX)
  // translateY.value=withTiming(event.nativeEvent.locationY,{duration:0})
  // translateX.value=withTiming(event.nativeEvent.locationX,{duration:0})
  // console.log("jnnju")
}}
style={{flex:1,justifyContent:'center'}}
>


      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:0,}}>

       <View>
        
        <FlatList data={Array(
          3
        )} 
        keyExtractor={(_,i)=>i.toString()}
        renderItem={renderLeftCard}
        
        />
        </View> 
      
       <View>
    
       <FlatList data={Array(
         3
         )} 
         keyExtractor={(_,i)=>i.toString()}
        renderItem={renderRightCard}
        
        /></View> 
       
    


      </View>

<View style={{position:"absolute",alignSelf:"center"}}>

      <View style={styles.hexagon}>
   
     
        </View>
        <View style={[styles.hexagon, { transform: [{ rotate: "180deg" }] }]}>
             <CenterElement />
        </View> 
    
</View>
</View>
    </ImageBackground>
         </>
  )
}

export default Home
