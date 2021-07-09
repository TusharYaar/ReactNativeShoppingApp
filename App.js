import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore, combineReducers  } from 'redux';
import {Provider} from "react-redux";
import {productsReducer} from "./store/reducers/products";

import ShopNavigation  from './navigator/shopNavigation';

export default function App() {
  const rootReducer = combineReducers({
    products: productsReducer
  });
  
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
