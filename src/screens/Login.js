import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Block, Text, Input, Button} from '../components';

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
            <Button style={{marginBottom: 13}} full color="#2e58ff">
              <Text weight="bold" center size={15} spacing={0} color="#fff">
                Sign in
              </Text>
            </Button>
            <Text height={22} color="#8798AD" size={15}>
              Don't have an account?{' '}
              <Text height={18} color="#2e58ff">
                Sign up
              </Text>
              .
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
