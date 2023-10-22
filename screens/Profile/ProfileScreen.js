import { View, Text,Alert,Button,Linking} from 'react-native'
import React from 'react'

const ProfileScreen = ({route}) => {
  const {id}=route?.params
  Alert.alert("alert",id?.toString())
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button 
      title='ll'
      onPress={()=>Linking.openURL('mychat://profile/120')}
      />
    </View>
  )
}

export default ProfileScreen