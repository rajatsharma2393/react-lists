import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";

import React, { Component } from "react";
import dataGenerator from "./DataGenerator";
import ListElement from "./ListElement";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      users: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.addData();
  }

  addData = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        setTimeout(() => {
          let newUsers = dataGenerator(this.state.page);
          if (newUsers && newUsers.length > 0) {
            this.setState({
              users: [...this.state.users, ...newUsers],
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        }, 1500);
      }
    );
  };

  onEndReached = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.addData();
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            style={{ marginTop: 20 }}
            data={this.state.users}
            renderItem={({ item, index }) => (
              <ListElement {...item} index={index} />
            )}
            keyExtractor={item => item.name + item.age}
            ListHeaderComponent={() => <Button title="Add User" />}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0}
          />

          {this.state.isLoading && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  list: {
    width: "100%"
  },
  activity: {
    alignSelf: "center"
  }
});
