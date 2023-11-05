import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native-web";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import ResturentItems, { LocalRestaurent } from "../components/Resturentitems";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

export default function Home() {
  const [restaurentData,setrestaurentData]=useState(LocalRestaurent)
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturentItems ResturentData={restaurentData} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </SafeAreaView>
  );
}
