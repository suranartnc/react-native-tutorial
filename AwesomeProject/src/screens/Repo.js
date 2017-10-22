import React, { Component } from 'react';

import {
  Image,
  ImageBackground,
  View,
  Text
} from 'react-native';

import Touchable from 'react-native-platform-touchable';

export default class RepoScreen extends Component {
  render() {
    const { state: { params: { name } } } = this.props.navigation;

    return (
      <View>
        <Touchable
          onPress={() => console.log('hello!')}
          style={{
            backgroundColor: '#eee',
            paddingVertical: 30,
            paddingHorizontal: 80,
          }}
          background={Touchable.Ripple('blue')}
        >
          <Text>Tap me</Text>
        </Touchable>
        <Image source={require('../img/header_logo.png')} />
        <Image 
          source={{ 
            uri: 'https://facebook.github.io/react-native/releases/next/img/header_logo.png',
            cache: 'only-if-cached'
          }} 
          style={{
            width: 60,
            height: 60
          }}
        />
        <Image 
          style={{ 
            width: 51,
            height: 51,
            resizeMode: Image.resizeMode.contain 
          }} 
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} 
        />
        <ImageBackground
          source={{
            uri: 'https://facebook.github.io/react-native/releases/next/img/header_logo.png'
          }}
          style={{
            width: 300,
            height: 300
          }}
        >
          <Text>Text in background image</Text>
        </ImageBackground>
        <Text>{name}</Text>
      </View>
    );
  }
}
