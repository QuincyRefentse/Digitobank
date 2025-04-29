import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockData = [
  {
    id: '1',
    title: 'Uber Ride',
    amount: '-R120.00',
    date: 'April 20',
    address: '123 Main St, Springfield',
    type: 'Payment' // Payment type
  },
  {
    id: '2',
    title: 'Checkers Groceries',
    amount: '-R645.50',
    date: 'April 18',
    address: '456 Oak Ave, Springfield',
    type: 'Payment' // Payment type
  },
  {
    id: '3',
    title: 'Spotify Subscription',
    amount: '-R59.99',
    date: 'April 17',
    address: '789 Pine Rd, Springfield',
    type: 'Payment' // Payment type
  },
  {
    id: '4',
    title: 'Woolworths',
    amount: '-R320.10',
    date: 'April 15',
    address: '101 Maple Dr, Springfield',
    type: 'Payment' // Payment type
  },
  {
    id: '5',
    title: 'Salary',
    amount: '+R5000.00',
    date: 'April 10',
    address: '123 Business St, Springfield',
    type: 'Receipt' // Receipt type
  },
  {
    id: '6',
    title: 'Refund for Order #1234',
    amount: '+R150.00',
    date: 'April 8',
    address: '456 Park Ave, Springfield',
    type: 'Receipt' // Receipt type
  },
];

const peopleSentMoneyTo = [
  { id: '1', name: 'John Doe', amountSent: '-R200.00' },
  { id: '2', name: 'Jane Smith', amountSent: '-R150.50' },
  { id: '3', name: 'Alice Johnson', amountSent: '-R300.00' },
];

const address = '1234 Elm Street, Springfield, XYZ';

export default function Purchases({ ListHeaderComponent }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemAddress}>{item.address}</Text>
        {/* Display transaction type */}
        <Text style={styles.itemType}>{item.type}</Text>
      </View>
      <Text style={styles.itemAmount}>{item.amount}</Text>
    </TouchableOpacity>
  );

  const renderPersonItem = ({ item }: any) => (
    <View style={styles.personContainer}>
      <Text style={styles.personName}>{item.name}</Text>
      <Text style={styles.personAmount}>{item.amountSent}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {ListHeaderComponent}

      {/* Address Section */}
      <View style={styles.addressSection}>
        <Text style={styles.addressTitle}>Address:</Text>
        <Text style={styles.address}>{address}</Text>
      </View>

      {/* List of People Money Sent To */}
      <View style={styles.peopleSection}>
        <Text style={styles.peopleTitle}>People Money Sent To:</Text>
        <FlatList
          data={peopleSentMoneyTo}
          keyExtractor={(item) => item.id}
          renderItem={renderPersonItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Purchases and Transactions List */}
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  itemAddress: {
    fontSize: 12,
    color: '#666',
    marginTop: 4, // Space between date and address
  },
  itemType: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for receipts
    marginTop: 4,
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f44336', // Red color for payments
  },
  addressSection: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  peopleSection: {
    marginBottom: 20,
  },
  peopleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  personContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  personName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  personAmount: {
    fontSize: 14,
    color: '#f44336',
    marginTop: 5,
  },
});
