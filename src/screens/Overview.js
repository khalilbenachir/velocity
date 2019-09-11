import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Input, Button} from '../components';

export default class Analytics extends Component {
  render() {
    return (
      <Block center middle>
        <Text> Overview </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
