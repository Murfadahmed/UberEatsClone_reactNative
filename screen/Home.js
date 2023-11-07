import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-web";
import HeaderTabs from "../components/Home/HeaderTabs";
import Searchbar from "../components/Home/Searchbar";
import Categories from "../components/Home/Categories";
import ResturentItems, { LocalRestaurent } from "../components/Home/Resturentitems";
import BottomTabs from "../components/Home/BottomTabs";

export default function Home() {
  const [restaurentData, setrestaurentData] = useState(LocalRestaurent);
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
