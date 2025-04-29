import React, { useState ,useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import  NumPad  from './NumPad';
// Custom PinContainer and PinDot components
const PinContainer = ({ children }) => (
  <View style={styles.pinContainer}>{children}</View>
);

const PinDot = () => <View style={styles.pinDot} />;

export default function PinScreen({ navigation }) {
const router = useRouter();

  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
    if(pinCount === totalPins){
    router.push("/DashboardScreen")
    }
  },[pinCount]);

  const renderPins = () => {
    const pins = [];
    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <PinDot />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      );
    }
    return pins;
  };
  const pressKey = (_, index) => {
        setPinCount(prev => {
             return index != 10 ? prev + 1 : prev - 1;
        })
  }

  const handleAccessPin = () => {
    router.push('/screens/TouchScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digito Bank</Text>

      <Text style={styles.touch}>Enter Your Pin Code {'\n'}</Text>

      <View style={styles.pinRow}>{renderPins()}</View>

      <Text style={styles.touched}>Forgot PIN?</Text>

      <NumPad onPress={pressKey} />

      <Text style={styles.id}>
        Please verify your identity {'\n'}using Touch ID
      </Text>

      <TouchableOpacity style={styles.opa} onPress={handleAccessPin}>
        <View style={styles.opaContent}>
          <Fontisto name="locked" color="#FFFFFF" size={16} style={styles.lock} />
          <Text style={styles.touchIdText}>Use Touch ID</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002D72',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
  },

  touch: {
    fontSize: 20,
    fontWeight: '900',
    color: '#002D72',
    textAlign: 'center',
    marginTop: 20,
  },

  touched: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333333',
    textAlign: 'center',
    marginTop: 20,
  },

  id: {
    fontSize: 16,
    fontWeight: '900',
    color: '#002D72',
    textAlign: 'center',
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
  },

  opa: {
    position: 'absolute',
    bottom: 30,
    left: 130,
    right: 130,
    backgroundColor: '#1A73E8',
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

  touchIdText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  lock: {
    marginRight: 8,
  },

  pinRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  pinContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pinDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});



/*
import React, { useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Fontisto } from '@expo/vector-icons'; // Correct import for MaterialIcons
import { render } from "react-dom";
import styled from 'styled-components';

export default function PinScreen({ navigation }) {

      const [pinCount,setPinCount ] = useState(0);
      const totalPins = 6;

      const renderPins = () => {
        const pins = [];

        for(let x = 1; x <= totalPins; x++ ) {

        pins.push(
           x <= pinCount ? (
           <PinContainer key={x}>
                <Pin />
           </PinContainer>
           ) : (
           <PinContainer key={x}/>
                )
            );
        }
        return pins; // <-- Don't forget to return
    };
    const handleAccessPin = () => {

       router.push('/screens/TouchScreen');
    };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Digito Bank</Text>


      <Text style={styles.touch}>
        Enter Your Pin Code {'\n'}
      </Text>
      <Text style={styles.touched}>Forgot PIN?</Text>
      <Text style={styles.id}>
        Please verify your identity {'\n'}using Touch ID
      </Text>


      <TouchableOpacity style={styles.opa}>
        <View style={styles.opaContent}>
          <Fontisto name="locked" color="#FFFFFF" size={16} style={styles.lock} />
          <Text style={styles.pin}>Use Touch ID</Text>
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
    top: 130,
    left: 0,
    right: 0,
  },
   touched: {
      fontSize: 16,
      fontWeight: '900',
      color: "#333333",
      textAlign: 'center',
      position: 'absolute',
      top: 200,
      left: 0,
      right: 0,
    },

  id: {
    fontSize: 16,
    fontWeight: '900',
    color: "#002D72",
    textAlign: 'center',
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
  },

  opa: {
    position: 'absolute',
    top: 250,
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


*/