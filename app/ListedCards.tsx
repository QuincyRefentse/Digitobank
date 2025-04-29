import React, { useState } from "react";
import BottomTabs from "@/components/BottomTabs";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

// 🪪 Mock card data
const initialCardData = [
  {
    id: "1",
    type: "Visa",
    last4: "1234",
    holder: "John Doe",
    expiry: "12/26",
    backgroundColor: "#5196f4",
  },
  {
    id: "2",
    type: "MasterCard",
    last4: "5678",
    holder: "Jane Smith",
    expiry: "05/25",
    backgroundColor: "#f4a261",
  },
  {
    id: "3",
    type: "Amex",
    last4: "9012",
    holder: "Alex Johnson",
    expiry: "09/27",
    backgroundColor: "#2a9d8f",
  },
];

export default function CardsScreen() {
  const [cards, setCards] = useState(initialCardData);

  const handleRemove = (id) => {
    Alert.alert("Remove Card", "Are you sure you want to remove this card?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        onPress: () => setCards((prev) => prev.filter((card) => card.id !== id)),
        style: "destructive",
      },
    ]);
  };

  const handleUpdate = (id) => {
    Alert.alert("Update Card", `Update functionality for card ${id} coming soon!`);
  };

  const handleAddCard = () => {
    const newId = (cards.length + 1).toString();
    const newCard = {
      id: newId,
      type: "Visa",
      last4: Math.floor(1000 + Math.random() * 9000).toString(),
      holder: "New User",
      expiry: "01/30",
      backgroundColor: "#6c5ce7",
    };
    setCards((prev) => [...prev, newCard]);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.cardType}>{item.type}</Text>
      <Text style={styles.cardNumber}>•••• •••• •••• {item.last4}</Text>
      <Text style={styles.expiry}>Exp: {item.expiry}</Text>
      <Text style={styles.cardHolder}>{item.holder}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.updateButton]}
          onPress={() => handleUpdate(item.id)}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.removeButton]}
          onPress={() => handleRemove(item.id)}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>My Cards</Text>

      {/* Add Card Button at the Top */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>+ Add New Card</Text>
      </TouchableOpacity>

      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cardType: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 8,
  },
  cardNumber: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 2,
    marginBottom: 4,
  },
  expiry: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  cardHolder: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  updateButton: {
    backgroundColor: "#ffffff33",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#333",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
