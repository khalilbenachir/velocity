import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Input, Button} from '../components';

export default class Map extends Component {
  render() {
    return (
      <Block middle center style={styles.container}>
        <Text> Map </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
