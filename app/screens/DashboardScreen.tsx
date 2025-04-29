import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Home'); // Navigate back to the login screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/digito.png')}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to Your Dashboard yesbo</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: 60,
    backgroundColor: '#A1CEDC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,  // Shadow effect for the cards
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 40,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
