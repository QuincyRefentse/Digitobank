import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function EmployeePortal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmployeeLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    // You can implement API call here
    Alert.alert('Success', `Welcome Employee: ${email}`);
    router.push('/screens/CustomerPaymentPortal'); // adjust route if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/digito.png')} // optional image
          style={styles.reactLogo}
        />

        <Text style={styles.title}>Employee Portal</Text>

        <TextInput
          style={styles.input}
          placeholder="Employee Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleEmployeeLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Authorized Personnel Only</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
 reactLogo: {
    height: 300,
    width: 300,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#000', // deep black background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1E1E2F',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#A1CEDC',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#C0C0C0', // silver tone
  },
  title: {
    fontSize: 24,
    color: '#A1CEDC', // soft blue
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2C2C3D',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    marginBottom: 16,
    fontSize: 16,
    borderColor: '#555',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#C0C0C0',
    marginTop: 20,
    fontStyle: 'italic',
    fontSize: 14,
  },
});
