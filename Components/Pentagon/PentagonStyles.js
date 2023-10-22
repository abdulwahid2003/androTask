import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constants";
import { Colors } from "../../global";
import { getResponsiveFontSize } from "../../constants";

export const styles=StyleSheet.create({

    cuboid:{
        borderBottomWidth: CHANGE_BY_MOBILE_DPI(110),
       borderBottomColor: Colors.WHITE,
       height:CHANGE_BY_MOBILE_DPI(0),
       width:CHANGE_BY_MOBILE_DPI(120),
       borderLeftWidth:CHANGE_BY_MOBILE_DPI(30),
       borderLeftColor:"transparent",
       borderRightWidth:CHANGE_BY_MOBILE_DPI(30),
       borderRightColor:"transparent",
       transform:[{rotate:"180deg"}],
    },
    lowerTriangle:{
        borderBottomWidth: CHANGE_BY_MOBILE_DPI(20),
      borderBottomColor: Colors.WHITE, 
      height:CHANGE_BY_MOBILE_DPI(40),
      width:CHANGE_BY_MOBILE_DPI(40),
      borderLeftWidth:CHANGE_BY_MOBILE_DPI(35),
      borderLeftColor:"transparent",
      borderRightWidth:CHANGE_BY_MOBILE_DPI(35),
      borderRightColor:"transparent",
      transform:[{rotate:"180deg"}],
      alignSelf:'center'
    },
    titleText:{
        fontSize:getResponsiveFontSize(24),
        color:Colors.ORANGE,
        lineHeight:24,
        fontFamily:"times",
        fontWeight:"800",
        textAlign:'center'
    },
    descriptionText:(size)=>({
        fontSize:getResponsiveFontSize(size),
        color:Colors.NORTH_GREEN,
        // lineHeight:size,
        fontFamily:"times",
        fontWeight:"600",
        textAlign:"center"
    })
})