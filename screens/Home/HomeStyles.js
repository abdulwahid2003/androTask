import { Colors } from "../../global";

const { StyleSheet } = require("react-native");
const { CHANGE_BY_MOBILE_DPI } = require("../../constants");

export const  styles=StyleSheet.create({
    hexagon: {
      width: CHANGE_BY_MOBILE_DPI(190        ),
      height: CHANGE_BY_MOBILE_DPI(100),
      backgroundColor: "transparent",
      borderBottomWidth: CHANGE_BY_MOBILE_DPI(87),
      borderBottomColor: Colors.ASH_GREY, // Change this color as needed
      borderLeftWidth: 38,
      borderLeftColor:"transparent",
      borderRightWidth: 39,
      borderRightColor: "transparent",
  
      borderTopLeftRadius:0,
      
    },
 
    btn:{
      height:CHANGE_BY_MOBILE_DPI(30),
      width:CHANGE_BY_MOBILE_DPI(100),
      backgroundColor:Colors.ORANGE ,
      justifyContent:"center" ,
      alignItems:"center",
      borderRadius:20,
      borderColor:Colors.WHITE,
      borderWidth:2
    }
  })