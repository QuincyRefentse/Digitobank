import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Alert, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for token storage

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Login Handler Function
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch('https://digitobank.vercel.app/api/users/login', {

      /* https://digitobank.vercel.app/  http://10.0.0.29:3000/api/users/login */
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password to backend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();

      // Store the JWT token in AsyncStorage
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userId', data.user.id); // Optionally store user info if needed

      Alert.alert('Login Successful', `Welcome, ${data.user.name}`);

      // Navigate to TouchScreen (or any other screen you want)
      router.push('/screens/TouchScreen');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleRegistration = () => {
    router.push('/Registration');
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/digito.png')}
          style={styles.reactLogo}
        />
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>Login </ThemedText>

          <ThemedText type="title" style={styles.title} onPress={handleRegistration}>Registration</ThemedText>
        </View>

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
    height: 300,
    width: 300,
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
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
});
