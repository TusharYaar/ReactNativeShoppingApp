import React from 'react'
import { StyleSheet, Text, Image, View,Button,TouchableOpacity } from 'react-native'

import {COLORS} from "../constants/colors"
const ProductItem = (props) => {
    return (
        <TouchableOpacity style={styles.product} onPress={props.viewDetail}>
        <View >
            <Image  style={styles.image} source={{uri: props.item.imageUrl}}/>
            <View>
            <Text style={styles.title} numberOfLines={1}>{props.item.title}</Text>
            <Text style={styles.price}>${props.item.price.toFixed(2)}</Text>
            </View>
            <View>
                <Button color={COLORS.primary} title="Add to Cart" onPress={props.addToCart}/>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    product: {        
        height: 300,
        padding: 5,
        margin: 10,
        elevation: 1,
        borderRadius: 5
    },
    image: {
        width: "100%",
        height:"70%"
    },
    title: {
        fontSize: 24,
    }

})
