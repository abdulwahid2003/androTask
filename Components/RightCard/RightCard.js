import { View, Text, Image } from 'react-native'
import React from 'react'
import { CHANGE_BY_MOBILE_DPI, getResponsiveFontSize } from '../../constants'
import { Colors } from '../../global'

const RightCard = ({index}) => {

    const colors=["#00A9FF","#7752FE","#687EFF"]
  return (
    <View style={{flexDirection:"row-reverse",height: CHANGE_BY_MOBILE_DPI(80),
    width: CHANGE_BY_MOBILE_DPI(150),
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius:25,marginVertical:5,borderTopLeftRadius:index==0?25:0
    }}>
 <View
        style={{
          height: "80%",
          width: "90%",
          borderWidth: 2,
          borderRadius: 8,
        //   borderLeftWidth: 0,
          borderColor: colors[index%colors.length],
      paddingLeft:6,    borderBottomLeftRadius:25,
          padding:4,
        }}
      >
        <Text style={{fontSize:getResponsiveFontSize(16),color:Colors.PRIMARY,fontWeight:"600"}}>
          FHOUSE 2 <Text style={{color:Colors.SEA_GREEN}}>₹500</Text>
        </Text>
        <Text style={{fontSize:getResponsiveFontSize(13),color:Colors.PRIMARY,fontWeight:"600"}}>PRASHANT TAWDE</Text>
        <Text style={{fontSize:getResponsiveFontSize(12),color:Colors.PRIMARY,fontWeight:"600"}}>MUMBAI 98149000</Text>
      </View>
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
          left: -30,
          backgroundColor: "transparent",
          borderRadius: 10,
          borderWidth: 4,
          borderColor: colors[index%colors.length]
        }}
      />
    </View>
  )
}

export default RightCard