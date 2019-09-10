import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Analytics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Service </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
