import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export  let LocalRestaurent = [
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123,
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
    {
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "The karachi Foods",
        categories: ['desi_food', 'street_food'],
        price: '$$',
        rating: 4.2,
        review: 123
    },
]
export default function Resturentitems(props) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 30 }}>
            {props.ResturentData.map((restaurent, index) => (

                <View id={index}style={{
                    marginTop: 2,
                    padding: 15,
                    backgroundColor: 'white',
                }}>
                    <RestaurentImage image={restaurent.image_url} />
                    <RestaurentInfo name={restaurent.name} rating={restaurent.rating} />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const RestaurentImage = (props) => (
    <>
        <Image
            source={{
                uri:props.image,
            }}
            style={{
                width: "100%",
                height: 180,
                borderRadius: 10
            }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
);

const RestaurentInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 10,
        // backgroundColor: 'lightgrey',
        // padding: 5,
        // borderRadius: 5
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30 - 45 . min</Text>
        </View>
        <View style={{
            backgroundColor: 'lightyellow',
            padding: 5,
            borderRadius: 15,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)