import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, StatusBar, TextInput, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import BottomTabs from '@/components/BottomTabs';
import Purchases from '@/components/Purchases';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={require('@/assets/images/DigitoBank.png')}
              style={styles.profilePhoto}
            />
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.userName}>DesignIntoCode </Text>
            </View>
          </View>
          <Ionicons name="settings" size={24} color="black" />
        </View>

         <View style={styles.balanceContainer}>
                  <Text style={styles.balanceText}>R115 000</Text>
                  <Text style={styles.balanceLabel}>Current Balance</Text>
          </View>

        {/*
        Balance
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>R115 000</Text>
          <Text style={styles.balanceLabel}>Current Balance</Text>
        </View>

        📊 Chart
        <Text style={styles.chartTitle}>Spending Trend</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: [1200, 800, 1100, 950, 1300, 1600, 900],
                color: () => '#5196f4',
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => '#555',
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#5196f4',
            },
          }}
          bezier
          style={styles.chart}
        />
        */}

        {/* Transactions Header with Search */}
        <Purchases ListHeaderComponent={
          <>
            <View style={styles.transactionsHeader}>
              <Text style={styles.lastPurchasesText}>Last Purchases</Text>
              <MaterialIcons name="sort" size={24} color="#5196f4" />
            </View>
            <View style={styles.searchContainer}>
              <AntDesign name="search1" size={18} color="#5196f4" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Transactions"
                placeholderTextColor="#999"
              />
            </View>
          </>
        } />
      </ScrollView>

      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
    color: '#111',
  },
  chart: {
    borderRadius: 16,
    marginBottom: 30,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  lastPurchasesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
