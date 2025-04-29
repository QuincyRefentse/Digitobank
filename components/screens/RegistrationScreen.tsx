import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Alert, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Registration Successful', `Welcome, ${email}`);
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Login with Google pressed');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Login with Facebook pressed');
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/digito.png')}
          style={styles.reactLogo}
        />
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>Registration</ThemedText>
        </View>

        {/* LinearGradient applied here */}
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <ThemedText type="buttonText">Register</ThemedText>
          </TouchableOpacity>

          <View style={styles.socialButtonsRow}>
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
              <Image
                source={require('@/assets/images/google-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
              <Image
                source={require('@/assets/images/facebook-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </ThemedView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',  // White background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,  // Padding to avoid content sticking to the edges
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  reactLogo: {
    height: 200,  // Adjusted logo size for a more balanced view
    width: 200,
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
    color: '#333',  // A darker color for better contrast
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',  // Lighter background for the form
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,  // Added shadow for a card-like effect
  },
  input: {
    height: 50,
    width: '100%',  // Full width for better alignment
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,  // Slightly larger text for easier readability
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
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',  // More balanced layout for buttons
    width: '100%',
    marginBottom: 20,  // Space between the buttons and the form
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
