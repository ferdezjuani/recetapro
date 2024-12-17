// app/auth/_layout.tsx

import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { useAuth } from '~/utils/useAuth';

export default function AuthLayout() {

  const { user, loading } = useAuth();

  if (user) {
    return <Redirect href="/dashboard/home" />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff', // Flecha de retroceso blanca
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'LeagueSpartan_700Bold',
        },
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name="login"
        options={{ title: 'Iniciar Sesión' }}
      />
      <Stack.Screen
        name="register"
        options={{ title: 'Registro' }}
      />
    </Stack>
  );
}
