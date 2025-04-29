import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hides headers for all screens (you can customize per screen if needed)
      }}
    />
  );
}
