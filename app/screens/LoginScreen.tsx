// LoginScreen.js
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    Alert.alert('Login Successful', `Welcome, ${email}`);
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/digito.png')}
          style={styles.reactLogo}
        />
        <ThemedText type="title" style={styles.title}>Login</ThemedText>

        <ThemedView style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <ThemedText type="buttonText">Login</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <ThemedText type="buttonText" style={styles.registrationText}>
              Don't have an account? Register
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  reactLogo: {
    height: 200,
    width: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#A1CEDC',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    marginBottom: 30,
  },
  registrationText: {
    color: '#007BFF',
    marginTop: 10,
  },
});
