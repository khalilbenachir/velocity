import React, {Component} from 'react';
import {Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Block, Text, Input, Button} from '../components';
import {colors, fonts, sizes} from '../constants/theme';

export default class Analytics extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Block center middle>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={10}
          enabled>
          <Block center middle>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Base/Logo.png')}
            />
          </Block>
          <Block flex={2.5} center>
            <Text
              center
              spacing={0}
              color={colors.black}
              height={32}
              weight={'300'}
              style={[{marginBottom: 6}, fonts.h3]}
              size={sizes.h3}>
              Sign in to Velocity
            </Text>
            <Text style={fonts.caption}>
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{marginTop: 40}}>
              <Input
                full
                style={[{marginBottom: 20}, fonts.paragraph]}
                email
                label="email address"
              />
              <Input
                full
                forgotPassword
                style={{marginBottom: 26}}
                password
                label="Password"
                navigation={navigation}
              />
              <Button
                onPress={() => navigation.navigate('Overview')}
                style={{marginBottom: 13}}
                full
                color={colors.blue}>
                <Text center style={fonts.button}>
                  Sign in
                </Text>
              </Button>
              <Text style={fonts.caption}>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Register')}
                  height={18}
                  color={colors.lightblue}>
                  Sign up
                </Text>
                .
              </Text>
            </Block>
          </Block>
        </KeyboardAvoidingView>
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
