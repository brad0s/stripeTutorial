import React from 'react';
import {View, Text, StyleSheet, Pressable, StatusBar} from 'react-native';

import Blob from '../components/Blob';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Blob />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Card')}>
        <Text style={styles.label}>Buy</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
  },
  button: {
    borderRadius: 8,
    width: 150,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5941A9',
    height: 40,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
