import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import BottomTabs from '@/components/BottomTabs';
import Amount from '@/components/Amount';
import NumPad from './NumPad';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for token storage

export default function CardsScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState("R 0.00");
  const [userName] = useState("John Doe");

  const [profilePic] = useState(require('@/assets/images/digito.png'));

  const handleLogout = () => {
    router.push('/');
  };

  const handleNumPadPress = (value: string) => {
    setAmount((prevAmount) => {
      if (prevAmount === "R 0.00") {
        return `R ${value}`;
      } else {
        return `R ${prevAmount.slice(2) + value}`;
      }
    });
  };

  const handleArrowPress = () => {
    setAmount("R 0.00");
  };

  const handleSend = () => {
    Alert.alert('Sending amount', `${amount}`);
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={profilePic}
          style={styles.profilePhoto}
        />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>

      {/* Centered Amount and Text */}
      <View style={styles.content}>
        <Amount value={amount} label="Choose amount to send" />
      </View>

      {/* NumPad for updating the amount */}
      <NumPad
        onPress={handleNumPadPress}
        onArrowPress={handleArrowPress}
      />

      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Send button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>Send: {amount}</Text>
      </TouchableOpacity>

      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 70,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 20,
    color: '#333',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  content: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  sendButton: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    backgroundColor: '#1A73E8',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    zIndex: 10,
  },
  sendText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
