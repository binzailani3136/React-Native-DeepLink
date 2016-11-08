/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import urlParse from 'url-parse';
export default class DeepLinkSolution extends Component {
    componentDidMount() {
        const deepLinkUrl = Linking.getInitialURL().then((url) => {
            console.log(`Deep Link URL: ${url}`);
            if (url) {
                const parsedUrl = urlParse(url, true);
                const {query: {userId}} = parsedUrl;
                if (userId) {
                    this._loadUserProfile(userId);
                }
            }
        }).catch(err => console.error('An error occurred', err));
    }
    _loadUserProfile(userId) {
        alert(userId);
    }
    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DeepLinkSolution', () => DeepLinkSolution);
