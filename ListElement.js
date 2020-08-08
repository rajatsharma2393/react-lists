import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

const ROW_HEIGHT = 70;

class ListElement extends Component {
  render() {
    const { name, email, phone } = this.props;

    const rowStyles = [styles.row];

    return (
      <TouchableOpacity onPress={this.onRemove}>
        <Animated.View style={rowStyles}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    alignItems: "flex-start",
    height: ROW_HEIGHT
  },
  name: {
    fontSize: 18,
    fontWeight: "500"
  },
  email: {
    fontSize: 14
  }
});

export default ListElement;
