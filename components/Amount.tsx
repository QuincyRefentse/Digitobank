import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AmountProps = {
  label: string;
  value?: string | number;
};

const Amount: React.FC<AmountProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>

      {value !== undefined && <Text style={styles.value}>{value}</Text>}
       <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
});

export default Amount;
