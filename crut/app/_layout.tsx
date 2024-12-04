import { Stack } from "expo-router";
import { tokenCache } from "@/cache";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import userDetailContext from '../context/UserDetailsContext'
import { useState } from "react";


export default function RootLayout() {

  const [userDetail, setUserDetail] = useState();

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }


  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey={publishableKey}>
      <ClerkLoaded>
        <userDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
        </Stack>
        </userDetailContext.Provider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
