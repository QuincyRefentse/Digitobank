import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Fontisto } from '@expo/vector-icons'; // Correct import for MaterialIcons
import { useRouter } from 'expo-router';
import styled from 'styled-components';

export default function TouchScreen({ navigation }) {

  const router = useRouter();
  const handleCirclePress = () => {
    console.log('Circle pressed!');
  };
    const handleAccessPin = () => {

       router.push('/PinScreen');
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onLongPress={() => navigation?.navigate('Tabs')} // Safe navigation check
        delayPressIn={200}
      >
        <Text style={styles.title}>Digito Bank</Text>

        <View style={styles.content}>
          <View style={styles.circleWrapper}>
            <View style={[styles.circle, { backgroundColor: '#5196f430' }]}>
              <View style={[styles.circle, { backgroundColor: '#5196f410' }]}>
                <View style={[styles.circle, { backgroundColor: '#5196f405' }]}>
                  <View style={[styles.circle, { backgroundColor: '#A1CEDC' }]}>
                    <TouchableOpacity style={styles.touchButton} onPress={handleCirclePress}>
                      <MaterialIcons name="fingerprint" size={64} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.touch}>
        Touch ID sensor for access to {'\n'} your Digito Bank.
      </Text>
      <Text style={styles.id}>
        Please verify your identity {'\n'}using Touch ID
      </Text>

      {/* 👇 Updated Button with Icon and Text Side-by-Side */}
      <TouchableOpacity style={styles.opa} onPress={handleAccessPin}>
        <View style={styles.opaContent}>
          <Fontisto name="locked" color="#FFFFFF" size={16} style={styles.lock} />
          <Text style={styles.pin}>Enter Access Pin</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#002D72",
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  circle: {
    width: 120,
    height: 120,
    backgroundColor: '#A1CEDC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 5,
  },

  circleText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

  touch: {
    fontSize: 20,
    fontWeight: '900',
    color: "#002D72",
    textAlign: 'center',
    position: 'absolute',
    bottom: 250,
    left: 0,
    right: 0,
  },

  id: {
    fontSize: 16,
    fontWeight: '900',
    color: "#002D72",
    textAlign: 'center',
    position: 'absolute',
    bottom: 160,
    left: 0,
    right: 0,
  },

  opa: {
    position: 'absolute',
    bottom: 70,
    left: 130,
    right: 130,
    backgroundColor: "#1A73E8",
    opacity: 0.9,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  opaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pin: {
    fontSize: 14,
    fontWeight: '900',
    color: "#002D72",
    textAlign: 'center',
  },

  lock: {
    marginRight: 8,
  },
});
