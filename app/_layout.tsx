// app/_layout.tsx

import { Stack } from 'expo-router';
import { View } from 'react-native';
import '../global.css';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  LeagueSpartan_400Regular,
  LeagueSpartan_700Bold
} from '@expo-google-fonts/league-spartan';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'LeagueSpartan_400Regular': LeagueSpartan_400Regular,
          'LeagueSpartan_700Bold': LeagueSpartan_700Bold,
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setFontsLoaded(true);
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex-1 bg-[#add5fc]'>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
