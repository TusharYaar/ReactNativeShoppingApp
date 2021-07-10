import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector,useDispatch} from "react-redux";
import {addToCart} from "../store/actions/cart";

import ProductItem from "../components/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        renderItem={(item) => (
          <ProductItem
            item={item.item}
            viewDetail={() => {
              props.navigation.navigate("productDetail", {
                productId: item.item.id,
                title: item.item.title,
              });
            }}
            addToCart={() => {
              dispatch(addToCart(item.item))
            }}
          />
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = {
  title: "All Products",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsOverviewScreen;
