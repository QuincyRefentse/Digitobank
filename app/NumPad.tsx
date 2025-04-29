// NumPad.tsx

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface NumPadProps {
  onPress: (value: string) => void;
  onArrowPress: () => void;
}

const NumPad: React.FC<NumPadProps> = ({ onPress, onArrowPress }) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <View style={styles.numPad}>
      <View style={styles.row}>
        {numbers.slice(0, 3).map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => onPress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {numbers.slice(3, 6).map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => onPress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {numbers.slice(6, 9).map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => onPress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={onArrowPress}>
          <Text style={styles.buttonText}>←</Text> {/* Arrow button */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress('')}>
          <Text style={styles.buttonText}></Text> {/* Empty button (if needed) */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numPad: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NumPad;
