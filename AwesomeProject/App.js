/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  ImageBackground
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Touchable from 'react-native-platform-touchable';

class HomeScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      repos: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/orgs/octokit/repos')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoading: false,
          repos: json
        });
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.repos}
          renderItem={({ item }) => (
              <Text 
                style={styles.item}
                onPress={() =>
                  navigate('Repo', { 
                    name: item.name 
                  })
                }
              >
                {item.name}
              </Text>
            )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

class RepoScreen extends Component {
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
        <Image source={require('./img/header_logo.png')} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
   },
   sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
});

const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      title: 'Repositories'
    }
  },
  Repo: { 
    screen: RepoScreen,
    navigationOptions: {
      title: 'Description'
    }
  },
});

export default App;
