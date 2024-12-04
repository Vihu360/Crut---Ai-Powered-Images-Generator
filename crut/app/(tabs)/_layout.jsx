import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import GlobalApi from '../../services/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import userDetailContext from '../../context/UserDetailsContext'

export default function TabsLayout() {

  const { user, isLoaded } = useUser();
  const { userDetail, setUserDetail } = React.useContext(userDetailContext);

  useEffect(() => {
    if (isLoaded && user) {
      verifyUser();
    }
  }, [user, isLoaded]);

  const verifyUser = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      console.log('User email:', email);
      if (email) {
        console.log('Verifying user...');
        const result = await GlobalApi.getUserInformation(email);
        console.log('User verification result:', result.data);
        console.log(result.data.length)

        if (result.data.length != 0) {
          setUserDetail(result.data[0]);
          return;
        }
        try {

          const userData = {
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName
          }

          const result = await GlobalApi.createNewUser(userData);
          console.log('User creation result:', result.data);
          setUserDetail(result.data[0]);
          
        } catch (error) {
          console.error()
          
        }
      }
    } catch (error) { 
      console.error('Error verifying user:', error);
    }
  };

  return (
    <Tabs >
      <Tabs.Screen 
        name="home" 
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
      name="profile" 
      options={{ 
        headerShown: false,
        title: 'Profile',
        tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
       }}
      />
      <Tabs.Screen name="collection" options={{ headerShown: false,
        titlee: 'Collection',
        tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />,
       }} />
    </Tabs>
  )
}