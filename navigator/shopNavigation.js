import { createAppContainer } from "react-navigation";
import {Platform} from "react-native";

import { createStackNavigator } from 'react-navigation-stack';


import ProductsOverviewScreen from "../screens/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import OrdersScreen from "../screens/OrdersScreen";
import CartScreen from "../screens/CartScreen";

import  {COLORS} from "../constants/colors";
const productsNavigator = createStackNavigator({
    productsOverview: ProductsOverviewScreen,
    productDetail: ProductDetailScreen,
    orders: OrdersScreen,
    cart: CartScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:Platform.OS === "android" ?  COLORS.primary : "",
        },
        headerTintColor: Platform.OS === "android" ?"white" : COLORS.primary,
    }
})

export default createAppContainer(productsNavigator);