import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
let food = [
  {
    image_url:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The karachi Foods",
    categories: ["desi_food", "street_food"],
    price: "$$",
    rating: 4.2,
    review: 123,
  },
];
const styles = StyleSheet.create({
  menuItemsStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  titleInfoStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
});
export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {food.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyle}>
            <FoodInfo name={food} category={food} review={food} />
            <FoodImage image={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{width:240,justifyContent:'space-evenly'}}>
    <Text style={styles.titleInfoStyle}>{props.name.name}</Text>
    <Text>{props.category.categories[0]}</Text>
    <Text>{props.review.rating}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{
      uri: props.image.image_url,
    }}
    style={{
      width: 100,
      height: 100,
      // resizeMode: "contain",
      borderRadius: 8,
    }}
  />
);
