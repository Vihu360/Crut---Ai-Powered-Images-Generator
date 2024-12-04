import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

WebBrowser.maybeCompleteAuthSession();

export default function index() {

    useWarmUpBrowser();
  
  const { startOAuthFlow } = useOAuth({ 
    strategy: 'oauth_google',
    redirectUrl: Linking.createURL('/(tabs)/home')
  });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error('OAuth error:', err);
      Alert.alert(
        'Authentication Error',
        'Failed to sign in with Google. Please try again.'
      );
    }
  }, []);

    return (
        <View>
            <Image source={require('../../../assets/images/image1.jpg')}
                style={{ width: '100%', height: 600 }}
            />
            <View style={styles.textContainer}>

                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 25
                }}>
                    Welcome to ReImagine AI
                </Text>

                <Text style={{ fontSize: 16, 
                    color: 'gray', 
                    textAlign: 'center',
                 }}>
                    create the unImaginable in a click 
                </Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                    continue
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 13, color: 'gray', 
                        textAlign: 'center', padding: 10, paddingHorizontal: 45,
                     }}>
                    By continuing you agree to our Terms of Service and Privacy Policy
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 25,
        marginTop: -25,
        backgroundColor: 'white',
        height: 600,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 7
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        color: 'white',
        margin: 5
    }
})

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }
  