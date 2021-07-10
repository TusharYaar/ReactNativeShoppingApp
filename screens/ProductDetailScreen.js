import React from "react";
import { StyleSheet, Text, View,ScrollView,Image,Button } from "react-native";
import {useSelector,useDispatch} from "react-redux";

import {addToCart} from "../store/actions/cart";
import {COLORS} from "../constants/colors"
const ProductDetailScreen = (props) => {
  const dispatch = useDispatch();
  const productId =  props.navigation.getParam("productId");

  const product = useSelector((state) => state.products.products.find(p => p.id === productId));
  return (
    <ScrollView style={styles.screen}>
      <View>
      <Image source={{uri: product.imageUrl}} style={styles.image}/>
    <View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
    <Button color={COLORS.primary} title="Add to Cart" onPress={()=> {
      dispatch(addToCart(product))
    }}/>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = ({navigation}) => {
  return {
    title: navigation.getParam("title"),
  }
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 30,
    marginVertical: 10,

  },
  price: {
    fontSize: 24,
    marginVertical: 10,

  },
  description: {
    fontSize: 20,
    marginVertical: 10,
  }
});

