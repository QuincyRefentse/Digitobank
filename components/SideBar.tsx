import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  isMobile?: boolean;
};

export default function SideBar({ isMobile = false }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: isHovered ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isHovered]);

  const iconColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'white'],
  });

  const textColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'white'],
  });

  const menuItems = [
    { label: 'Dashboard', icon: 'speedometer-outline', path: '/screens/CustomerPaymentPortal' },
    { label: 'Customer Payments', icon: 'card-outline', path: '/screens/CustomerPayments' },
    { label: 'Settings', icon: 'settings-outline', path: '/settings' },
  ];

  const handleLogout = () => {
    console.log('Logged out');
    router.push('/');
  };

  return (
    <View style={[styles.sidebar, isMobile ? styles.sidebarMobile : styles.sidebarDesktop]}>
      <Text style={styles.logo}>💼 Portal</Text>

      <View style={styles.menuSection}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <View key={item.path}>
              <Pressable
                onPress={() => router.push(item.path)}
                style={[styles.menuItem, isActive && styles.activeItem]}
              >
                <Ionicons
                  name={item.icon as any}
                  size={20}
                  color={isActive ? '#fff' : '#070708'}
                  style={styles.icon}
                />
                <Text style={[styles.link, isActive && styles.activeLink]}>
                  {item.label}
                </Text>
              </Pressable>
              <View style={styles.separator} />
            </View>
          );
        })}
      </View>

      <View style={styles.logoutSection}>
        <Pressable
          onPress={handleLogout}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          style={styles.logoutButton}
        >
          <Animated.View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name="log-out-outline"
              size={20}
              color={iconColor as unknown as string}
              style={styles.icon}
            />
            <Animated.Text style={[styles.logoutText, { color: textColor }]}>
              Logout
            </Animated.Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f5',
    flex: 1,
    justifyContent: 'space-between',
  },
  sidebarDesktop: {
    width: 200,
    height: '100%',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sidebarMobile: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logo: {
    color: '#070708',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuSection: {
    flexGrow: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  link: {
    color: '#070708',
    fontSize: 16,
  },
  activeItem: {
    backgroundColor: '#007BFF33',
  },
  activeLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 4,
    marginLeft: 10,
  },
  logoutSection: {
    paddingBottom: 20,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#d9534f',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
