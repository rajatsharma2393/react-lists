import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";

import React, { Component } from "react";
import InfiniteList from "./InfiniteList";

export default class App extends Component {
  render() {
    return <InfiniteList />;
  }
}
