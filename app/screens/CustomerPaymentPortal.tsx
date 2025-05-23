import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SideBar from '@/components/SideBar';

const initialUserData = [
  {
    id: '682f20c73b6a9313bdca6d36',
    name: 'Pattrick',
    email: 'pattrick@gmail.com',
    balance: 40000,
    role: 'user',
    accountNumber: 'd1ddef58-6060-4219-87a8-c02a9facc14b',
    createdAt: '2025-05-22T13:04:07.348Z',
  },
  {
    id: '782f21e83c7b9424cdfb7f47',
    name: 'Jessica',
    email: 'jessica@example.com',
    balance: 25000,
    role: 'user',
    accountNumber: 'a2b3c4d5-1234-5678-9abc-def123456789',
    createdAt: '2025-05-20T09:15:00.000Z',
  },
  {
    id: '882f22e93d8b9535edef8f58',
    name: 'Michael',
    email: 'michael@example.com',
    balance: 32000,
    role: 'user',
    accountNumber: 'f1e2d3c4-b5a6-7890-1234-56789abcdef0',
    createdAt: '2025-05-21T11:20:30.000Z',
  },
  {
    id: '982f23f04e9b9646fedf9g69',
    name: 'Sophia',
    email: 'sophia@example.com',
    balance: 45000,
    role: 'admin',
    accountNumber: '123e4567-e89b-12d3-a456-426614174000',
    createdAt: '2025-05-19T08:30:45.000Z',
  },
  {
    id: 'a82f24g15fab0757ghfh0h70',
    name: 'James',
    email: 'james@example.com',
    balance: 18000,
    role: 'user',
    accountNumber: '0a1b2c3d-4e5f-6789-0abc-def123456789',
    createdAt: '2025-05-18T14:50:10.000Z',
  },
  {
    id: 'b92f25h26gcb1868ijij1i81',
    name: 'Emily',
    email: 'emily@example.com',
    balance: 22000,
    role: 'user',
    accountNumber: 'abc12345-def6-7890-abcd-ef1234567890',
    createdAt: '2025-05-17T12:00:00.000Z',
  },
];

export default function CustomerPaymentPortal() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(initialUserData);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = initialUserData.filter(
      user =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.accountNumber.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.sidebarWrapper, isMobile && styles.sidebarMobile]}>
        <SideBar isMobile={isMobile} />
      </View>

      <View style={[styles.contentWrapper, isMobile && styles.contentWrapperMobile]}>
        <Text style={styles.title}>Customer Payment Portal</Text>
        <Text style={styles.subtitle}>Process and manage customer transactions below</Text>

        {/* Search Bar */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, email, or account number"
            placeholderTextColor="#999"
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <ScrollView horizontal={isMobile} style={styles.tableWrapper}>
            <View>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableCell, styles.cellId]}>ID</Text>
                <Text style={[styles.tableCell, styles.cellName]}>Name</Text>
                <Text style={[styles.tableCell, styles.cellEmail]}>Email</Text>
                <Text style={[styles.tableCell, styles.cellBalance]}>Balance</Text>
                <Text style={[styles.tableCell, styles.cellRole]}>Role</Text>
                <Text style={[styles.tableCell, styles.cellAccount]}>Account Number</Text>
                <Text style={[styles.tableCell, styles.cellCreated]}>Created At</Text>
              </View>

              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <View key={user.id} style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.cellId]}>{user.id.slice(0, 6)}...</Text>
                    <Text style={[styles.tableCell, styles.cellName]}>{user.name}</Text>
                    <Text style={[styles.tableCell, styles.cellEmail]}>{user.email}</Text>
                    <Text style={[styles.tableCell, styles.cellBalance]}>
                      ${user.balance.toLocaleString()}
                    </Text>
                    <Text style={[styles.tableCell, styles.cellRole]}>{user.role}</Text>
                    <Text style={[styles.tableCell, styles.cellAccount]} numberOfLines={1}>
                      {user.accountNumber}
                    </Text>
                    <Text style={[styles.tableCell, styles.cellCreated]}>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </Text>
                  </View>
                ))
              ) : (
                <View style={[styles.tableRow, { justifyContent: 'center' }]}>
                  <Text style={{ color: '#999', fontStyle: 'italic' }}>No matching results</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },

  sidebarWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 220,
    height: '100%',
    backgroundColor: '#f0f0f5',
    borderRightWidth: 1,
    borderColor: '#ccc',
    zIndex: 10,
  },
  sidebarMobile: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    borderRightWidth: 0,
  },

  contentWrapper: {
    marginLeft: 220,
    padding: 24,
    backgroundColor: '#f0f0f5',
    flex: 1,
  },
  contentWrapperMobile: {
    marginLeft: 0,
    width: '100%',
    paddingHorizontal: 16,
  },

  title: {
    color: '#070708',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    color: '#4B4B4B',
    fontSize: 18,
    marginBottom: 24,
  },

  searchWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#070708',
  },
  searchButton: {
    marginLeft: 12,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 7,
  },

  tableWrapper: {
    // horizontal scroll handled by ScrollView
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 16,
    alignItems: 'center',
  },

  tableHeader: {
    backgroundColor: '#f9fafb',
    borderBottomWidth: 2,
  },

  tableCell: {
    color: '#070708',
    fontSize: 15,
    paddingHorizontal: 12,
  },

  cellId: {
    width: 80,
    fontWeight: '600',
  },
  cellName: {
    width: 130,
  },
  cellEmail: {
    width: 220,
  },
  cellBalance: {
    width: 100,
    textAlign: 'right',
    fontWeight: '600',
  },
  cellRole: {
    width: 90,
    textTransform: 'capitalize',
  },
  cellAccount: {
    width: 260,
  },
  cellCreated: {
    width: 120,
  },
});
