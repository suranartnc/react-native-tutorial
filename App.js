import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text>Navigation</Text>
        </View>
        <View style={styles.body}>
          <Text>Main</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  navigation: {
    backgroundColor: 'gray'    
  },
  body: {
    backgroundColor: 'red',
    alignItems: 'center'
  }
});
