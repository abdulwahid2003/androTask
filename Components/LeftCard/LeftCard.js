import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { getResponsiveFontSize } from "../../constants";
import { Colors } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constants";

function Leftcard({index}) {
    const colors=["#DA0C81","#FF9B50","#DA0C81"]
  return (
    <View
      style={{
        height: CHANGE_BY_MOBILE_DPI(80),
        width: CHANGE_BY_MOBILE_DPI(150),
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",padding:0,   borderBottomRightRadius:25,margin:5,borderTopRightRadius:index==0?25:0
      }}
    >
      <Image
        source={{
          uri:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        }}
        style={{
            height: CHANGE_BY_MOBILE_DPI(60),
            width:CHANGE_BY_MOBILE_DPI(70),
            top:CHANGE_BY_MOBILE_DPI(12),
            position: "absolute",
            alignSelf: "flex-start",
            left: CHANGE_BY_MOBILE_DPI(-30),
            backgroundColor: "transparent",
            borderRadius: 10,
            borderWidth: 4,
            borderColor: colors[index%colors.length]
        }}
      />
     

      <View
        style={{
            height: "80%",
            width: "90%",
            borderWidth: 2,
            borderRadius: 8,
            borderLeftWidth: 0,
            borderColor: colors[index%colors.length],
        paddingLeft:CHANGE_BY_MOBILE_DPI(40),    borderBottomRightRadius:25,
            padding:3,
        }}
      >
      <Text style={{fontSize:getResponsiveFontSize(16),color:Colors.PRIMARY,fontWeight:"600",}}>
          FHOUSE 2 <Text style={{color:Colors.SEA_GREEN}}>₹500 {index}</Text>
        </Text>
        <Text style={{fontSize:getResponsiveFontSize(13),color:Colors.PRIMARY,fontWeight:"600",}} numberOfLines={1}>PRASHANT TAWDE</Text>
        <Text numberOfLines={1} style={{fontSize:getResponsiveFontSize(12),color:Colors.PRIMARY,fontWeight:"600",}}>MUMBAI 98149000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Leftcard;