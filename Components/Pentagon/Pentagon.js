// import React from "react";
// import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// const Pentagon = ({
//   rotateAngle,
//   style,
//   bgColor,
//   translateY,
//   triangleStyle,
//   cuboidStyle
// }) => {
//   return (
//     <View
//       style={[
//         { transform: [{ rotate: `${rotateAngle}deg` }] },
//         style,
//         { margin: 0 }
//       ]}
//     >
//       <View
//         style={[
//           {
//             height: 50,
//             width: 20,
//             borderBottomWidth: 30,
//             borderBottomColor: bgColor,
//             borderLeftWidth: 47,
//             borderLeftColor: "transparent",
//             borderRightWidth: 42,
//             borderRightColor: "transparent"
//           },
//           triangleStyle
//         ]}
//       />
//       <View
//         style={[
//           {
//             height: 70,
//             width: 87,
//             borderBottomColor: bgColor,
//             borderBottomWidth: 30,
//             borderLeftWidth: 25,
//             borderLeftColor: "transparent",
//             borderRightWidth: 25,
//             borderRightColor: "transparent",
//             transform: [{ rotate: "180deg" }],
//             bottom: 2
//           },
//           cuboidStyle
//         ]}
//       />
//     </View>
//   );
// };
// export default Pentagon;

import { View, Text, Image } from 'react-native'
import React from 'react'
import { CHANGE_BY_MOBILE_DPI, getResponsiveFontSize } from '../../constants'
import { Colors } from '../../global'
import { styles } from './PentagonStyles'

const CenterElement = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:'center',transform:[{rotate:"180deg"},{translateY:-200}]}}>
   <Image  source={{
          uri:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        }}
        
        style={{
          height: CHANGE_BY_MOBILE_DPI  (60),
          width:CHANGE_BY_MOBILE_DPI(70),
          // top:CHANGE_BY_MOBILE_DPI(12),
       alignSelf:'center',
      
          borderRadius: 10,
          borderWidth: 4,
        
        }}
        />
  

<View style={{marginVertical:CHANGE_BY_MOBILE_DPI(20)}}>

        <View style={styles.cuboid}>
        </View>
<View style={styles.lowerTriangle}>

</View>
        </View>
        <View style={{position:"absolute",transform:[{translateY:CHANGE_BY_MOBILE_DPI(90)}]}}>
        <Text style={styles.titleText}>FULL HOUSE</Text>

        <Text style={styles.descriptionText(18)}>₹ 500</Text>
        <Text style={styles.descriptionText(16)}>Prashant Tawde</Text>
        <Text style={styles.descriptionText(16)}>9618900899</Text>
        <Text style={styles.descriptionText(16)}>MUMBAI</Text>
        </View>
    </View>
  )
}

export default CenterElement