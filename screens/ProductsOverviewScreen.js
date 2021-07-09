import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";

const ProductsOverviewScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ProductsOverviewScreen</Text>
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
