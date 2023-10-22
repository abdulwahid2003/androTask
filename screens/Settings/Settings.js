import { View, Text ,Linking,Button} from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button 
      title='ll'
      onPress={()=>Linking.openURL('mychat://profile/120')}
      />
    </View>
  )
}

export default Settings