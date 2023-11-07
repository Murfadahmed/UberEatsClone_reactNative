import { View, Text, Image } from "react-native";
import React from "react";
import About from "../components/RestaurentDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/RestaurentDetail/MenuItems";

export default function RestaurentDetails() {
  return (
    <View style={{width:'100%'}}>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
