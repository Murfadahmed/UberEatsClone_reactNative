import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default function BottomTabs() {
  return (
    <View style={
      {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 30,
      }
    }>
      <Icon icon='home' title='Home' />
      <Icon icon='search' title='Browser' />
      <Icon icon='shopping-bag' title='Grocery' />
      <Icon icon='user' title='Account' />
      <Icon icon='receipt' title='Orders' />
    </View>
  )
}

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
      }}
    />
    <Text>{props.title}</Text>
  </View>
)