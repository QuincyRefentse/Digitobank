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

// Sample users data (for reference in transactions)
const users = [
  { id: 'u1', name: 'Pattrick' },
  { id: 'u2', name: 'Jessica' },
  { id: 'u3', name: 'Michael' },
  { id: 'u4', name: 'Sophia' },
  { id: 'u5', name: 'James' },
  { id: 'u6', name: 'Emily' },
];

// Sample vendors data
const vendors = [
  { id: 'v1', name: 'Vendor A' },
  { id: 'v2', name: 'Vendor B' },
  { id: 'v3', name: 'Vendor C' },
];

// Sample transaction data
const initialTransactions = [
  {
    id: 't1',
    fromId: 'u1',      // Payer user id
    toId: 'u2',        // Payee user id
    toType: 'user',    // 'user' or 'vendor'
    amount: 1500,
    date: '2025-05-22T10:00:00Z',
    type: 'User to User',
  },
  {
    id: 't2',
    fromId: 'u3',
    toId: 'v1',
    toType: 'vendor',
    amount: 2000,
    date: '2025-05-22T12:30:00Z',
    type: 'User to Vendor',
  },
  {
    id: 't3',
    fromId: 'u2',
    toId: 'u5',
    toType: 'user',
    amount: 500,
    date: '2025-05-21T15:20:00Z',
    type: 'User to User',
  },
  {
    id: 't4',
    fromId: 'u6',
    toId: 'v3',
    toType: 'vendor',
    amount: 750,
    date: '2025-05-20T08:45:00Z',
    type: 'User to Vendor',
  },
];

export default function CustomerPayments() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(initialTransactions);

  // Helper to get user/vendor name by id
  const getNameById = (id, type) => {
    if (type === 'user') {
      const user = users.find(u => u.id === id);
      return user ? user.name : 'Unknown User';
    } else if (type === 'vendor') {
      const vendor = vendors.find(v => v.id === id);
      return vendor ? vendor.name : 'Unknown Vendor';
    }
    return 'Unknown';
  };

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = initialTransactions.filter(txn => {
      const fromName = getNameById(txn.fromId, 'user').toLowerCase();
      const toName = getNameById(txn.toId, txn.toType).toLowerCase();
      return (
        txn.id.toLowerCase().includes(term) ||
        fromName.includes(term) ||
        toName.includes(term) ||
        txn.type.toLowerCase().includes(term)
      );
    });
    setFilteredTransactions(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.sidebarWrapper, isMobile && styles.sidebarMobile]}>
        <SideBar isMobile={isMobile} />
      </View>

      <View style={[styles.contentWrapper, isMobile && styles.contentWrapperMobile]}>
        <Text style={styles.title}>Customer Transactions</Text>
        <Text style={styles.subtitle}>View transactions between users and vendors</Text>

        {/* Search Bar */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by transaction ID, payer, payee or type"
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
                <Text style={[styles.tableCell, styles.cellId]}>Txn ID</Text>
                <Text style={[styles.tableCell, styles.cellName]}>From (User)</Text>
                <Text style={[styles.tableCell, styles.cellName]}>To</Text>
                <Text style={[styles.tableCell, styles.cellAmount]}>Amount</Text>
                <Text style={[styles.tableCell, styles.cellType]}>Type</Text>
                <Text style={[styles.tableCell, styles.cellDate]}>Date</Text>
              </View>

              {filteredTransactions.length > 0 ? (
                filteredTransactions.map(txn => (
                  <View key={txn.id} style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.cellId]}>{txn.id}</Text>
                    <Text style={[styles.tableCell, styles.cellName]}>{getNameById(txn.fromId, 'user')}</Text>
                    <Text style={[styles.tableCell, styles.cellName]}>{getNameById(txn.toId, txn.toType)}</Text>
                    <Text style={[styles.tableCell, styles.cellAmount]}>
                      ${txn.amount.toLocaleString()}
                    </Text>
                    <Text style={[styles.tableCell, styles.cellType]}>{txn.type}</Text>
                    <Text style={[styles.tableCell, styles.cellDate]}>
                      {new Date(txn.date).toLocaleDateString()}
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
    width: 90,
    fontWeight: '600',
  },
  cellName: {
    width: 140,
  },
  cellAmount: {
    width: 100,
    textAlign: 'right',
    fontWeight: '600',
  },
  cellType: {
    width: 130,
    textTransform: 'capitalize',
  },
  cellDate: {
    width: 110,
  },
});
