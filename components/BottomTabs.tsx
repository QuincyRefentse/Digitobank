// components/BottomTabs.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function BottomTabs() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/DashboardScreen')}
      >
        <Ionicons
          name="home"
          size={24}
          color={pathname === '/DashboardScreen' ? '#1A73E8' : 'gray'}
        />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/CardsScreen')}
      >
        <Ionicons
          name="swap-vertical-outline"
          size={24}
          color={pathname === '/CardsScreen' ? '#1A73E8' : 'gray'}
        />
        <Text style={styles.tabText}>Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/ListedCards')}
      >
        <Ionicons
          name="card"
          size={24}
          color={pathname === '/ListedCards' ? '#1A73E8' : 'gray'}
        />
        <Text style={styles.tabText}>Cards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
});
