import React, {Component} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {Block, Text, Input} from '../components';

export default class Analytics extends Component {
  render() {
    return (
      <Block center middle>
        <Block middle>
          <Image
            style={styles.logo}
            source={require('../assets/images/Base/Logo.png')}
          />
        </Block>
        <Block flex={2.5} center>
          <Text
            center
            spacing={0}
            color="#2e3840"
            height={32}
            weight={'300'}
            style={{marginBottom: 6}}
            size={28}>
            Sign in to Velocity
          </Text>
          <Text
            color="#8798AD"
            size={15}
            spacing={0}
            height={22}
            weight={'200'}>
            Please enter your credentials to proceed.
          </Text>
          <Block center style={{marginTop: 40}}>
            <Input
              full
              style={{marginBottom: 20}}
              email
              label="email address"
            />
            <Input full style={{marginBottom: 26}} password label="Password" />
            <Button title="sign in" />
            <Text color="#8798AD" size={15}>
              Don't have an account? Sign up.
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 28,
    width: 102,
  },
});
