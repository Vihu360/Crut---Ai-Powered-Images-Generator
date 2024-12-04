import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)/home" />;
}