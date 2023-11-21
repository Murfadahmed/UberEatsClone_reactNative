import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-web";
import HeaderTabs from "../components/Home/HeaderTabs";
import Searchbar from "../components/Home/Searchbar";
import Categories from "../components/Home/Categories";
import ResturentItems, { LocalRestaurent } from "../components/Home/Resturentitems";
import BottomTabs from "../components/Home/BottomTabs";

const API_key = `8kKEkxbn427BEcj5qPZH5ENt79F2CWMgATCyRt7KfUfZUKQBQitf7rf0aBoq97CgelvyOnu3RZ32dss1N2erZ5VyaiYFP8Ue5O4CWjAP1LsOC3N62-Vgy05V_QVaZXYx`
export default function Home() {
  const [restaurentData, setrestaurentData] = useState(LocalRestaurent);
  const getRestaurentFromYelp = () => {
    const yelpUrl = `GET https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`
    const apiOption = {
      headers: {
        Authorization: `Bearer${API_key}`
      }
    };
    return fetch(yelpUrl,apiOption)
    .then(res=>res.json())
    .then(json=>setrestaurentData(json.businesses))
  }
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
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
