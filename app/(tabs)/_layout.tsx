// app/layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext'; // Adjust path if needed

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </UserProvider>
  );
}
