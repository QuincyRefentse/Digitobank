import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SendRequestScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
