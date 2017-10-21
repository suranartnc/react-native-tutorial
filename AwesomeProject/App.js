/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  ScrollView 
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.handleKeywordsChanged = this.handleKeywordsChanged.bind(this);
    this.handleKeywordsSubmitted = this.handleKeywordsSubmitted.bind(this);
    
    this.state = {
      show: true,
      keywords: '',
      output: 'default'
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     show: !this.state.show
    //   })
    // }, 1000);
  }
  
  handleKeywordsChanged(keywords) {
    this.setState({
      keywords
    });
  }

  handleKeywordsSubmitted() {
    this.setState({
      output: this.state.keywords
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={styles.highlight}>
            <Text>{this.state.output}</Text>
            <TouchableHighlight onPress={() => { Alert.alert('TouchableHighlight'); }}>
              <View>
                <Text>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>
            <Button 
              title={this.state.keywords} 
              onPress={() => { Alert.alert(this.state.keywords); }}
            />
            {/* { 
              this.state.show && 
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
                style={styles.image}
              /> 
            } */}
          </View>
          <View style={styles.highlight} />
            <TextInput 
              placeholder="Enter keywords here..." 
              onChangeText={this.handleKeywordsChanged} 
              onSubmitEditing={this.handleKeywordsSubmitted}
            />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />
          <View style={styles.highlight} />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  highlight: {
    borderWidth: 1,    
    borderColor: 'red',
    width: 200,
    height: 100
  },
  image: {
    width: 193,
    height: 110
  }
});
