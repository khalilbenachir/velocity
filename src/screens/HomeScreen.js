import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Input, Button} from '../components';

export default class HomeScreen extends Component {
  render() {
    return (
      <Block middle center style={styles.container}>
        <Text> HomeScreen </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
