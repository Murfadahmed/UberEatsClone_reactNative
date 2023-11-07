import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";
const image =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Title = "pakistan ka baap kism ka khana";
const description =
  "Paya . Chana . Biryani . ${100} ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐";
export default function About() {
  return (
    <View>
      <ScrollView>
        <RestaurentImage image={image} />
        <RestaurentInfo info={Title} />
        <RestaurentDescription description={description} />
      </ScrollView>
    </View>
  );
}

const RestaurentImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: "100%",
      height: 190,
      // resizeMode:'center'
    }}
  />
);
const RestaurentDescription = (props) => (
  <>
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginHorizontal: 15,
        marginTop: 10,
      }}
    >
      {props.description}
    </Text>
  </>
);
const RestaurentInfo = (props) => (
  <>
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.info}
    </Text>
  </>
);
