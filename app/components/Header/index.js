import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.squarespace-cdn.com/content/v1/5e4823aa70139842dc1ee334/c12da268-ff45-439c-a5a7-51230a9b94ec/Civi+Logo+-+Light+Blue.png?format=1500w',
        }}
        style={styles.img}
      />
      <Text style={styles.text}>Mensagens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#426785',
    padding: 16,
    height: 80,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
  },
  img: {
    width: '20%',
    resizeMode: 'contain',
  },
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 32,
    marginLeft: 30,
  },
});
