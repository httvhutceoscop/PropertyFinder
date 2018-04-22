'use-strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// const App = StackNavigator({
//     Home: { screen: SearchPage },
// });
export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
