/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import axios from './services/axios';

import HeaderLocal from './components/Header';
import ListMessage from './components/ListMessage';

const App: () => Node = () => {
  const [messages, setMessages] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const getMessages = async () => {
    await axios
      .get('http://192.168.250.33:9000/messages')
      .then(r => {
        let json = r.data;

        json = json.map(value => {
          return {
            read: false,
            ...value,
          };
        });

        if (isNotEmptyList(messages)) {
          json = [...json, ...messages];
        }

        setMessages(json);
        setShowLoading(false);
      })
      .catch(error => {
        console.error(error);
        setShowLoading(false);
      });
  };

  const isNotEmptyList = list => {
    return list.filter(v => Object.keys(v).length === 0).length === 0;
  };

  useEffect(() => {
    getMessages();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HeaderLocal />
      {showLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#59cdfc" />
        </View>
      )}
      <ListMessage data={messages} />
      <Pressable
        onPress={() => getMessages()}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#59cdfc' : '#416884',
          },
          styles.buttonAction,
        ]}>
        <Text style={styles.textAction}>Atualizar lista</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 3,
    elevation: 3,
  },
  buttonAction: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    minWidth: 200,
    borderRadius: 8,
    padding: 12,
  },
  textAction: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default App;
