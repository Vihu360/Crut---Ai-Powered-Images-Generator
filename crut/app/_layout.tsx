import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { tokenCache } from "@/cache";
import userDetailContext from "../context/UserDetailsContext";
import { useState } from "react";

export default function RootLayout() {
  const [userDetail, setUserDetail] = useState(null);

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    console.error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env file.");
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <userDetailContext.Provider value={{ userDetail, setUserDetail }}>
          {/* Ensure status bar style */}
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          {/* Use SafeAreaView to avoid overlapping with the notification bar */}
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="login" />
            </Stack>
        </userDetailContext.Provider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

