import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";
import { useSelector } from "react-redux";
const ProductsOverviewScreen = () => {
    const products = useSelector(state => state.products.filteredProducts);
  return (
    <View style={styles.screen}>
      <FlatList data={products} renderItem = {item => <Text>{item.item.title}</Text>} style={{width: '100%'}}/>
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
